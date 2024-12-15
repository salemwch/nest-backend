import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
@Schema()
export class Category {
  @Prop()
  Name: string;
  @Prop()
  Description: string;
  @Prop([{type: SchemaTypes.ObjectId,ref:"subcategory"}])
  subcategory: Types.ObjectId[]

}
export const categorySchema = SchemaFactory.createForClass(Category);
