import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
@Schema()
export class Subcategory {
  @Prop()
  Name: string;
  @Prop()
  Description: string;
  @Prop()
  Age: number;
  @Prop({type: SchemaTypes.ObjectId, ref: "category"})
  category: Types.ObjectId;
  @Prop({type: SchemaTypes.ObjectId,ref:"product"})
  product: Types.ObjectId;
}
export const subcategorySchema = SchemaFactory.createForClass(Subcategory);
