import { Module } from '@nestjs/common';
import { TodolistsService } from './todolists.service';
import { TodolistsController } from './todolists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todolist } from './todolist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todolist])],
  providers: [TodolistsService],
  controllers: [TodolistsController],
})
export class TodolistsModule {}
