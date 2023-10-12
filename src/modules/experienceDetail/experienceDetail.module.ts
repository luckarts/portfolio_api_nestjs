import { Module } from '@nestjs/common';
import { ExperienceDetailsService } from './experienceDetail.service';
import { ProjectController } from 'experienceDetail/experienceDetail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperienceDetailEntity } from 'experienceDetail/entity/experienceDetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExperienceDetailEntity])],
  providers: [ExperienceDetailsService],
  controllers: [ProjectController],
})
export class ExperienceDetailModule {}
