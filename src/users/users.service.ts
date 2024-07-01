import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  createUser(dto: CreateUserDto): Promise<User> {
    if (!dto.username) {
      throw new BadRequestException('Username is required');
    }
    const user = this.usersRepository.create(dto);
    try {
      return this.usersRepository.save(user);
    } catch (error) {
      throw new BadRequestException('Failed to create user');
    }
  }

  getAllUsers(): Promise<User[]> {
    const allUsers = this.usersRepository.find();
    return allUsers;
  }

  deleteUser(id: string): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }
}
