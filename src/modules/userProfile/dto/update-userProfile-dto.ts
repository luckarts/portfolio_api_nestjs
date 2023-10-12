import {
  IsDecimal,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
} from 'class-validator';

export class UpdateUserProfileDto {
  @IsOptional()
  @IsString()
  img?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  cv?: string;
}
