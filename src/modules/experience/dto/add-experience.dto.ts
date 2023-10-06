import { IsOptional, IsString, IsNumber } from 'class-validator';

export class AddExperienceDto {
  @IsOptional()
  @IsString()
  date: string;

  @IsOptional()
  @IsNumber()
  year: number;

  @IsOptional()
  @IsString()
  job: string;

  @IsOptional()
  @IsString()
  company: string;

  @IsOptional()
  @IsString()
  url_company?: string;
}
