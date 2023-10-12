import { Module } from '@nestjs/common';
import { AuthService } from 'user/auth.service';
import { AuthController } from 'user/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'user/entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: process.env.JWT_EXPIRES_IN,
        },
      }),
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
