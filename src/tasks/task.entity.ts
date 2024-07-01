import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Todolist } from '../todolists/todolist.entity';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;
  @Column()
  readonly name: string;
  @Column()
  readonly isDone: boolean;
  @ManyToOne(() => Todolist, (todolist) => todolist.tasks)
  readonly todolist: Todolist;
}
