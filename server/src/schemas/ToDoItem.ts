import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ToDoList } from './ToDoList';

export type ToDoItemDocument = ToDoItem & Document;

@Schema()
export class ToDoItem {
  @Prop()
  text: string;

  @Prop()
  done: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "ToDoList" })
  list: ToDoList;
}

export const ToDoItemSchema = SchemaFactory.createForClass(ToDoItem);