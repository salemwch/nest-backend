import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
export class Product {
  @Prop()
  Ref: string;
  @Prop()
  Price: number;
  @Prop()
  Description: string;
  @Prop()
  Qnt: number;
  @Prop()
  image: string[];
  @Prop([{type: SchemaTypes.ObjectId,ref: "subcategory"
  }])
  subcategory: Types.ObjectId[];
  @Prop([{type: SchemaTypes.ObjectId,ref:"order"}])
  order: Types.ObjectId;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
