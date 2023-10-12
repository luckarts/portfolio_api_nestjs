import { IsOptional, IsString, IsNumber } from 'class-validator';

export class AddExperienceDetailsDto {
  @IsString()
  description: string;
}
