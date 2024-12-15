import { interfaceUser } from "src/user/interface/interface";
export interface interfacecustomer extends interfaceUser{
    adress: string;
    city: string;
    cin: number;
    items: string;
}