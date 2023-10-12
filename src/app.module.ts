import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormConfig from 'src/config/ormconfig';
import { ProjectModule } from 'project/project.module';
import { ExperienceModule } from 'experience/experience.module';
import { AuthModule } from 'user/user.module';

import { TagModule } from 'tag/tag.module';

@Module({
  imports: [
    ProjectModule,
    ExperienceModule,
    TagModule,
    AuthModule,
    TypeOrmModule.forRootAsync({ useFactory: () => ormConfig }),
  ],
})
export class AppModule {}
