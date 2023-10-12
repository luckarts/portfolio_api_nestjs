import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Req,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { AuthService } from 'user/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { RegisterUserDto } from 'user/dto/create-user.dto';
import { LoginUserDto } from 'user/dto/login-user.dto';

@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/auth/register')
  register(
    @Body(ValidationPipe)
    registerUserDto: RegisterUserDto,
  ) {
    return this.authService.create(registerUserDto);
  }

  @Post('/auth/login')
  async login(
    @Req()
    req: Request,
    @Res()
    response: Response,
    @Body()
    userLoginDto: LoginUserDto,
  ) {
    const { token } = await this.authService.login(userLoginDto);
    response.setHeader('Set-Cookie', token);
    return response.status(HttpStatus.NO_CONTENT).json({});
  }
}
