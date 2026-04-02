import { IsEnum, IsNumber } from 'class-validator';
import { UserRole } from '../user.entity';

export class UpdateRoleDto {
  @IsNumber()
  userId: number;

  @IsEnum(UserRole)
  role: UserRole;
}