import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";
import { User } from "src/user/entities/user.entity";

@Schema()
export class Provider extends User {
    items:string;
    @Prop()
    matricule: string;
    @Prop()
    company: string;
    @Prop()
    service: string;
    @Prop([{type: SchemaTypes.ObjectId, ref: 'Product'}])
    product: Types.ObjectId;
}
export const providerschema = SchemaFactory.createForClass(Provider)