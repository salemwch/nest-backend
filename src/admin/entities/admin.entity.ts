import {Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/user/entities/user.entity";

@Schema()
export class Admin extends User{
    items: string
}
export const adminSchema = SchemaFactory.createForClass(Admin);