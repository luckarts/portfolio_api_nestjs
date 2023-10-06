import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormConfig from 'src/config/ormconfig';
import { ProjectModule } from 'project/project.module';
import { ExperienceModule } from 'experience/experience.module';

@Module({
  imports: [
    ProjectModule,
    ExperienceModule,
    TypeOrmModule.forRootAsync({ useFactory: () => ormConfig }),
  ],
})
export class AppModule {}
