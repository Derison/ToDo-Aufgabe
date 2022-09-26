import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { ToDoList } from './todolist.schema';

export type ToDoItemDocument = ToDoItem & Document;

@Schema()
export class ToDoItem {
  @Prop()
  text: string;

  @Prop()
  done: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ToDoList.name })
  list: ToDoList;
}

export const ToDoItemSchema = SchemaFactory.createForClass(ToDoItem);