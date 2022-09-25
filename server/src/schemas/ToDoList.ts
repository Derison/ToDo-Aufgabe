import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ToDoItem } from './ToDoItem';

export type ToDoListDocument = ToDoList & Document;

@Schema()
export class ToDoList {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "ToDoItem" })
    items: ToDoItem[]
}

export const ToDoListSchema = SchemaFactory.createForClass(ToDoList);