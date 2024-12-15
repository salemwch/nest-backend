import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

@Schema()
export class Commande {
    @Prop()
    date: Date;
    @Prop()
    etat: string;
    @Prop()
    lieulivraison: string;
    @Prop()
    typelivraison: string;
    @Prop()
    deliveryprice: number;
    @Prop([{type: SchemaTypes.ObjectId,ref:'order'}])
    order: Types.ObjectId;
}
export const commandeSchema = SchemaFactory.createForClass(Commande);