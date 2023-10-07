import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from 'tag/tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from 'tag/entity/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  providers: [TagService],
  controllers: [TagController],
})
export class TagModule {}
