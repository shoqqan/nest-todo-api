import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import * as process from 'node:process';
import { User } from './users/user.entity';
import { TodolistsModule } from './todolists/todolists.module';
import { TasksModule } from './tasks/tasks.module';
import { Todolist } from './todolists/todolist.entity';
import { Task } from './tasks/task.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [User, Todolist, Task],
      synchronize: process.env.SYNCHRONIZE === 'true',
    }),
    UsersModule,
    TodolistsModule,
    TasksModule,
  ],
})
export class AppModule {}
