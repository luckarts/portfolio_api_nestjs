import { Module } from '@nestjs/common';
import { AuthService } from 'user/auth.service';
import { AuthController } from 'user/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'user/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
