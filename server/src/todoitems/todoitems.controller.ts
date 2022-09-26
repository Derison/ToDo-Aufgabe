import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoitemsService } from './todoitems.service';
import { CreateTodoitemDto } from './dto/create-todoitem.dto';
import { UpdateTodoitemDto } from './dto/update-todoitem.dto';

@Controller('todoitems')
export class TodoitemsController {
  constructor(private readonly todoitemsService: TodoitemsService) {}

  @Post()
  create(@Body() createTodoitemDto: CreateTodoitemDto) {
    return this.todoitemsService.create(createTodoitemDto);
  }

  @Get()
  findAll() {
    return this.todoitemsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoitemDto: UpdateTodoitemDto) {
    return this.todoitemsService.update(id, updateTodoitemDto);
  }
}
