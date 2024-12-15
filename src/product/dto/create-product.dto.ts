import {IsNotEmpty,IsNumber,IsString,Max,MaxLength,Min,} from 'class-validator';

export class createProductDto {
  @IsString()
  @MaxLength(40)
  @IsNotEmpty()
  readonly Ref: string;
  @IsNumber()
  @Max(99999999)
  @Min(1)
  readonly Price: number;
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly Description: string;
  @IsNumber()
  @Max(999999)
  @Min(1)
  readonly Qnt: number;
  image: string[];
  @IsString()
  readonly subcategory: string[];
  @IsString()
  readonly order: string;
  @IsString()
  readonly provider: string;
}
