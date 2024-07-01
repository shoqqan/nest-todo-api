import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Task } from '../tasks/task.entity';

@Entity('todolists')
export class Todolist {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;
  @ManyToOne(() => User, (user) => user.todolists)
  readonly user: User;
  @OneToMany(() => Task, (task) => task.todolist)
  readonly tasks: Task[];
}
