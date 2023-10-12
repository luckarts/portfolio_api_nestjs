import { Module } from '@nestjs/common';
import { UserProfileService } from 'userProfile/userProfile.service';
import { UserProfileController } from 'userProfile/userProfile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfileEntity } from 'userProfile/entity/userProfile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserProfileEntity])],
  providers: [UserProfileService],
  controllers: [UserProfileController],
})
export class UserProfileModule {}
