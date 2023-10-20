import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Finance extends Document {
  @Prop({
    type: String,
    default: () => new mongoose.Types.ObjectId().toHexString(),
  })
  financeId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ type: Number, default: false })
  bankAccount: number;

  @Prop({ default: false })
  accountName: string;

  @Prop({ type: Number, default: false })
  income: number;

  @Prop({ type: Number, default: false })
  expenses: number;

  @Prop({ type: Number, default: false })
  assets: number;

  @Prop({ type: Number, default: false })
  liabilities: number;
}

export const FinanceSchema = SchemaFactory.createForClass(Finance);
