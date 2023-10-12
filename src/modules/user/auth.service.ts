import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'user/entity/user.entity';
import { Repository, DeepPartial } from 'typeorm';
import { RegisterUserDto } from 'user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'user/dto/login-user.dto';
const saltOrRounds = 10;

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  async isValid(data: object) {
    return this.userRepository.findOne({ where: data });
  }

  async login(userDto: LoginUserDto) {
    return {
      token: this.jwtService.sign(userDto),
    };
  }

  async create(userDto: DeepPartial<RegisterUserDto>): Promise<UserEntity> {
    const { username, password, email } = userDto;
    if (!this.isValid({ email }) && !this.isValid({ username })) {
      throw new HttpException(
        'Le email et le username doit etre unique',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hash = await bcrypt.hash(password, saltOrRounds);
    const newUser = this.userRepository.create({ ...userDto, password: hash });
    try {
      await this.userRepository.save(newUser);
    } catch (e) {
      throw new HttpException('error save user', HttpStatus.BAD_REQUEST);
    }
    return newUser;
  }

  async delete(id: number) {
    return await this.userRepository.delete(id);
  }
}
