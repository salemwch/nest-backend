import { Document } from "mongoose";

export interface InterFaceOrder extends Document {
  Qnt: number;
  Price: number;
}
