import {
  IsDecimal,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
} from 'class-validator';

export class UpdateProjectDto {
  @IsOptional()
  @IsString()
  img?: string;

  @IsOptional()
  @IsString()
  title?: string;

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
  position?: number;
}
