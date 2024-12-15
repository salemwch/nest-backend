import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateCustomerDto extends CreateUserDto{
    readonly items: string
    @IsString()
    @IsNotEmpty()
    adress: string;
    @IsString()
    @IsNotEmpty()
    city: string;
    @IsNumber()
    @IsNotEmpty()
    cin: number;
    image: string;
    @IsString()
    readonly order: string
}
