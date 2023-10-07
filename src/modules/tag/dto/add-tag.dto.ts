import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class AddTagDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  enable: boolean;
}
