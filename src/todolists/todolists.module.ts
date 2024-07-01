import { Module } from '@nestjs/common';
import { TodolistsService } from './todolists.service';
import { TodolistsController } from './todolists.controller';

@Module({
  providers: [TodolistsService],
  controllers: [TodolistsController]
})
export class TodolistsModule {}
