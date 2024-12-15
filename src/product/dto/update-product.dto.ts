import { PartialType } from '@nestjs/mapped-types';
import { createProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(createProductDto) {}
