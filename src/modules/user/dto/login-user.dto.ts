import { IsLowercase, IsString, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  @IsLowercase()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
