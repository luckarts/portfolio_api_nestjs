import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class UpdateTagDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  enable: boolean;
}
