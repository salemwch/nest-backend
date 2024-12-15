import { Document } from "mongoose";
export interface InterfaceCommande extends Document{
    date: Date;
    etat: string;
    lieulivraision: string;
    typelivraision: string;
    deleveryprice: number;
}