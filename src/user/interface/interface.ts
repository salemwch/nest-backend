import { Document } from "mongoose";
export interface interfaceUser extends Document{
    readonly fullname: string,
    email: string,
    password: string,
    phone: number,
    refreshToken:string
}