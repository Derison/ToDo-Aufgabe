import { Module } from '@nestjs/common';
import { TodolistsService } from './todolists.service';
import { TodolistsController } from './todolists.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoList, ToDoListSchema } from 'src/schemas/todolist.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ToDoList.name, schema: ToDoListSchema }])],
  controllers: [TodolistsController],
  providers: [TodolistsService]
})
export class TodolistsModule {}
