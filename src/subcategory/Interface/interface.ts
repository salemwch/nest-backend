import { Document } from 'mongoose';

export interface InterfaceSub extends Document {
  readonly Name: string;
  readonly description: string;
  readonly age: number;
}
