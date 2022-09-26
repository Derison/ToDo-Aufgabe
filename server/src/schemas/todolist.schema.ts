import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';

export type ToDoListDocument = ToDoList & Document;

@Schema()
export class ToDoList {
    
}

export const ToDoListSchema = SchemaFactory.createForClass(ToDoList);