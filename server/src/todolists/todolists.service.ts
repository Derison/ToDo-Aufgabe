import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToDoItem } from 'src/schemas/todoitem.schema';
import { ToDoList, ToDoListDocument } from 'src/schemas/todolist.schema';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';

@Injectable()
export class TodolistsService {
  constructor(@InjectModel(ToDoList.name) private toDoListModel: Model<ToDoListDocument>) {}

  async create(createTodolistDto: CreateTodolistDto) {
    const lists: ToDoList[] = await this.findAll();

    if (lists.length > 0) {
      return lists[0];
    }

    return await new this.toDoListModel(createTodolistDto).save();
  }

  async findAll(): Promise<ToDoList[]> {
    return await this.toDoListModel
      .find()
      .exec();
  }
}
