import { IsOptional, IsString, IsNumber } from 'class-validator';

export class AddProjectDto {
  @IsOptional()
  @IsString()
  img: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  path_repo?: string;

  @IsOptional()
  @IsString()
  path_website?: string;

  @IsOptional()
  @IsNumber()
  position: number;
}
