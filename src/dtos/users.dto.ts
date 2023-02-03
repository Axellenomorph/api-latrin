import { Toilet } from '@/interfaces/toilet.interface';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  faves: Toilet[];
}
