import { PartialType } from '@nestjs/mapped-types';
import { CreateFatcureDto } from './create-fatcure.dto';

export class UpdateFatcureDto extends PartialType(CreateFatcureDto) {}
