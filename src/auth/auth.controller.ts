import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthDTO } from './authdto/authdto';
import { resetdto } from './dto/reset.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  signIn(@Body() data:AuthDTO){
    return this.authService.signIn(data)
  }
  @Post('forgetpassword')
  forgetpassword(@Body() email: AuthDTO){
    return this.authService.forgetpassword(email.email);
  }
  @Post("/:token")
  resetpassword(@Param("token") token: string,@Body() resetDto: resetdto){
    return this.authService.resetpassword(token,resetDto.password); 
  }
  @Put("/:id")
  logout(@Param("id") id: string){
    return this.authService.logout(id);
  }

}
