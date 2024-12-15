import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthDTO } from './authdto/authdto';
import * as argons2 from 'argon2';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
  constructor(
    private  userService:  UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private mailservice: MailerService,
  ){}
  async signIn(data: AuthDTO){
    const user = await this.userService.finByemail(data.email);
    if (!user) throw new BadRequestException("user does not exist");
    const passwordMatches = await argons2.verify(user.password, data.password)
    if(!passwordMatches)
      throw new BadRequestException('password is incorrect');
    const tokens = await this.getTokens(user._id, user.email);
    await this.updateRefreshToken(user._id, tokens.refreshToken);
    return {tokens,user};
  }
  async updateRefreshToken(userID: any,refreshToken:string){
    const hashedRefreshToken = await this.hashData(refreshToken);
    await this.userService.update(userID,{
      refreshToken: hashedRefreshToken,
    });
  }
  hashData(data: string){
    return argons2.hash(data);
  }
  async getTokens(userID: any, email: string){
    const[accessToken,refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userID,
          email,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userID,
          email,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn:'1d',
        },
      ),
    ]);
    return {
      accessToken, refreshToken
    }
  }
  async forgetpassword(email: string){
    const user = await this.userService.finByemail(email);
    if(!user) throw new BadRequestException("user does not exist");
    const accesstoken = this.jwtService.sign(
      {
        _id:user._id,
      },
      {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
        expiresIn: '5m',
      }
    )
    await this.userService.updatetoken(user._id,accesstoken)
    const mailoption = {
      to: user.email,
      subject: "reset password",
      html: `<b> Your Tokken to reset your Password </b> <a href = 'http://localhost:3001/auth/${accesstoken}'> Click Here </a>`,
    }
    await this.mailservice.sendMail(mailoption);
    return {succes: true, message: "you can chnage your password", data: user};
  }
  async resetpassword( token: string, newpassword: string):Promise<any>{
    try{
      const verifytoken = await this.jwtService.verify(token, {secret: this.configService.get<string>('JWT_ACCESS_SECRET'),});
      const user = await this.userService.getUser(verifytoken._id);
      if(!user) throw new BadRequestException(" user does not exist");
      user.password =  await this.hashData(newpassword);
      user.refreshToken = undefined;
      await user.save();
      return {succes: true, message: "password has been reseted succesful"};
    }catch (error){
      return {message: "invalid token", error: error.message};
    }
  }
  async logout(ID: string): Promise<any>{
    try{
      await this.userService.update(ID, {refreshToken: null});
      return {succes: true, message:" logout successful"};
    }catch (error){
      return{message: "bad request"};
    }
  }
}


