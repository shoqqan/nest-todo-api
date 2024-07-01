import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Todolist } from '../todolists/todolist.entity';

@Entity('users')
export class User {
  @ApiProperty({
    example: 'fdasfas313213-321323214124-43123',
    description: 'Уникальный идентификатор пользователя',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'johndoe',
    description: 'Никнейм пользователя',
  })
  @Column({ unique: true })
  username: string;

  @ApiProperty({
    example: 'johndoe123',
    description: 'Пароль',
  })
  @Column()
  password: string;
  @Column()
  @OneToMany(() => Todolist, (todolist) => todolist.user)
  todolists: Todolist[];
}
