import { IsNumber, IsString } from 'class-validator';

export class UsersDto {
  @IsNumber()
  id: number;

  @IsString()
  username: string;

  @IsString()
  email: string;
}
