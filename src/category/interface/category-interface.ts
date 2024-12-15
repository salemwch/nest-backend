import { Document } from 'mongoose';
export interface Icategory extends Document {
  readonly Name: string;
  readonly discription: string;
}
