import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoitemsModule } from './todoitems/todoitems.module';
import { TodolistsModule } from './todolists/todolists.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'), TodoitemsModule, TodolistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
