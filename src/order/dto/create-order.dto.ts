import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateOrderDto {
  @IsNumber()
  @Max(1000)
  @Min(1)
  @IsNotEmpty()
  Qnt: number;
  @IsNumber()
  @Max(1000)
  @Min(1)
  @IsNotEmpty()
  Price: number;
  @IsString()
  readonly product: string;
  @IsString()
  customer: string;
}
