import { IsOptional, IsString, IsNumber } from 'class-validator';

export class AddUserProfileDto {
  @IsOptional()
  @IsString()
  img: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  cv?: string;
}
