import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateSubcategoryDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly Name: string;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly description: string;
  @IsNumber()
  @Max(3)
  @Min(2)
  @IsNotEmpty()
  readonly age: number;
  @IsString()
  readonly category: string;
  @IsString()
  readonly product: string;
}
