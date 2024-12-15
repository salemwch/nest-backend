import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";
import { User } from "src/user/entities/user.entity";

@Schema()
export class Customer extends User {
    items: string;
    @Prop()
    adress: string;
    @Prop()
    city: string;
    @Prop()
    cin: number;
    @Prop()
    image: string;
    @Prop([{type: SchemaTypes.ObjectId, Ref: 'order'}])
    order: Types.ObjectId;
}
export const customerSchema = SchemaFactory.createForClass(Customer);