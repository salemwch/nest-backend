import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateCommandeDto {
    @IsString()
    @IsNotEmpty()
    date: Date;
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    etat: string;
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    lieulivraison: string;
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    typelivraison: string;
    @IsNumber()
    @IsNotEmpty()
    @Max(30)
    @Min(10)
    deliveryprice: number;
    @IsString()
    readonly order: string;
}
