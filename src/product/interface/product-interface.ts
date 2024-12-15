import { Document } from 'mongoose';

export interface InterfaceProduct extends Document {
  readonly Ref: string;
  readonly Price: number;
  readonly Description: string;
  readonly Qnt: number;
}
