import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";


@Schema()
export class Fatcure {
    @Prop()
    Ref: string;
    @Prop()
    Remise: number;
    @Prop()
    Description: string;
    @Prop([{type: SchemaTypes.ObjectId, ref: 'commande'}])
    commande: Types.ObjectId;
}
export const factuerschema = SchemaFactory.createForClass(Fatcure);
