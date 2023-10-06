import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { ExperienceController } from 'experience/experience.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperienceEntity } from 'experience/entity/experience.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExperienceEntity])],
  providers: [ExperienceService],
  controllers: [ExperienceController],
})
export class ExperienceModule {}
