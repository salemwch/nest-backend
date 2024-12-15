import { Document } from "mongoose";
export interface InterfaceFacture extends Document{
    readonly Ref: string;
    readonly Remise: number;
    readonly Descreiption: string; 
}