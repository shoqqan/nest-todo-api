import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'johndoe',
    description: 'Никнейм пользователя',
  })
  @IsNotEmpty()
  @IsString({ message: 'Должно быть строкой' })
  @Length(2, 16, { message: 'Не меньше 4 и не больше 16' })
  readonly username: string;
  @ApiProperty({
    example: 'johndoe123',
    description: 'Пароль пользователя',
  })
  @IsNotEmpty()
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Не меньше 4 и не больше 16' })
  readonly password: string;
}
