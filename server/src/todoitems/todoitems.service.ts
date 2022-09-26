import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { ToDoItem, ToDoItemDocument } from 'src/schemas/todoitem.schema';
import { CreateTodoitemDto } from './dto/create-todoitem.dto';
import { UpdateTodoitemDto } from './dto/update-todoitem.dto';

@Injectable()
export class TodoitemsService {
  constructor(@InjectModel(ToDoItem.name) private toDoItemModel: Model<ToDoItemDocument>) {}

  async create(createTodoitemDto: CreateTodoitemDto): Promise<ToDoItem> {
    return new this.toDoItemModel(createTodoitemDto).save();
  }

  async findAll(): Promise<ToDoItem[]> {
    return await this.toDoItemModel
      .find()
      .exec();
  }

  async update(id: string, updateTodoitemDto: UpdateTodoitemDto) {
      return await this.toDoItemModel
        .findByIdAndUpdate(new mongoose.Types.ObjectId(id), updateTodoitemDto)
        .setOptions({ overwrite: true, new: true });
  }
}
