import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type UserDocument = User & Document
@Schema({discriminatorKey:"items",collection:"users"})
export class User {
    @Prop()
    fullname: string
    @Prop()
    email: string
    @Prop()
    password: string
    @Prop()
    phone: number
    @Prop()
    refreshToken:string
}
export const Userschema = SchemaFactory.createForClass(User)
