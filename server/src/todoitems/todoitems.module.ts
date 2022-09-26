import { Module } from '@nestjs/common';
import { TodoitemsService } from './todoitems.service';
import { TodoitemsController } from './todoitems.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoItem, ToDoItemSchema } from 'src/schemas/todoitem.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ToDoItem.name, schema: ToDoItemSchema }])],
  controllers: [TodoitemsController],
  providers: [TodoitemsService]
})
export class TodoitemsModule {}
