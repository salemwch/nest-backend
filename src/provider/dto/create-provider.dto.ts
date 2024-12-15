import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";
export class CreateProviderDto extends CreateUserDto {
    readonly items: string
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    @MinLength(15)
    matricule: string
    @IsString()
    @IsNotEmpty()
    company: string
    @IsNotEmpty()
    @IsString()
    service: string
    @IsString()
    readonly Product: string
}
