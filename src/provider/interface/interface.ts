import { interfaceUser } from "src/user/interface/interface";
export interface interfaceProvider extends interfaceUser{
    matricule: string;
    company: string;
    service: string;
    items: string;
}