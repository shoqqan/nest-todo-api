import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'johndoe',
    description: 'Никнейм пользователя',
  })
  @Length(2, 16, { message: 'Не меньше 4 и не больше 16' })
  readonly username: string;
  @ApiProperty({
    example: 'johndoe123',
    description: 'Пароль пользователя',
  })
  @Length(4, 16, { message: 'Не меньше 4 и не больше 16' })
  readonly password: string;
}
