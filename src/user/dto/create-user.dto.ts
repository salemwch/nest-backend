import { IsNotEmpty, IsNumber, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    fullname: string
    @IsNotEmpty()
    @IsString()
    email: string
    @IsString()
    @IsNotEmpty()
    @MinLength(8,{message:'password at least be 8 charachters'})
    @Matches(/(?=.*[A-Z])/)
    @Matches(/(?=.*\d)/)
    password: string
    @IsNumber()
    @IsNotEmpty()
    phone: number
    refreshToken: string 
}
