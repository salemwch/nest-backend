import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { accessTokenStrategy } from './strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [JwtModule.register({}), ConfigModule, UserModule , MailerModule.forRootAsync({
    useFactory:()=>({
      transport:{
        host: "sandbox.smtp.mailtrap.io",
        port:2525,
        auth:{
          user: "5d5b17e53ff5a5",
          pass:"83a19f07341924"
        }
      }
    })
      })],
  controllers: [AuthController],
  providers: [AuthService, accessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
