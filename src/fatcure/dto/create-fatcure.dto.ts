import { IsNotEmpty,  IsNumber,  IsString, Max, MaxLength, Min } from "class-validator";

export class CreateFatcureDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    Ref: string;
    @IsNumber()
    @IsNotEmpty()
    @Max(30)
    @Min(10)
    Remise: number;
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    Description: string;
    @IsString()
    readonly commande: string;
}
