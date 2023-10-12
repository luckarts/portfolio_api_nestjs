import { IsOptional, IsString } from 'class-validator';

export class UpdateExperienceDetailsDto {
  @IsOptional()
  @IsString()
  description: string;
}
