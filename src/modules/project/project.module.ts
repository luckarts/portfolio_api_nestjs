import { Module } from '@nestjs/common';
import { ProjectService } from 'project/project.service';
import { ProjectController } from 'project/project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from 'project/entity/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity])],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
