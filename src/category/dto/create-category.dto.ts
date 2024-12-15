import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly Name: string;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly discription: string;
  @IsString()
  readonly subcategory: string[];
}
