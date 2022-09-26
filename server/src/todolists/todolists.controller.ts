import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodolistsService } from './todolists.service';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';
import { ToDoList } from 'src/schemas/todolist.schema';
import { TodoitemsService } from 'src/todoitems/todoitems.service';

@Controller('todolists')
export class TodolistsController {
  constructor(private readonly todolistsService: TodolistsService) {}

  @Post()
  async create(@Body() createTodolistDto: CreateTodolistDto) {
    return this.todolistsService.create(createTodolistDto);
  }

  @Get()
  async findAll() {
    return await this.todolistsService.findAll();
  }
}
