import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

@Schema()
export class Order {
    @Prop()
    Qnt: number;
    @Prop()
    Price: number; 
    @Prop([{type: SchemaTypes.ObjectId,ref:"Product"}])
    product: Types.ObjectId;
    @Prop([{type: SchemaTypes.ObjectId, ref: "commande"}])
    commande: Types.ObjectId;
    @Prop([{type: SchemaTypes.ObjectId,ref:"user"}])
    customer: Types.ObjectId;
}
export const orderSchema = SchemaFactory.createForClass(Order);