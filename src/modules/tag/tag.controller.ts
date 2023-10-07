import {
  Body,
  Get,
  Post,
  Param,
  Delete,
  Put,
  Controller,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TagService } from 'tag/tag.service';
import { AddTagDto } from 'tag/dto/add-tag.dto';
import { TagEntity } from 'tag/entity/tag.entity';
import { UpdateTagDto } from 'tag/dto/update-tag-dto';

ApiTags('tags');
@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get('/')
  async getTags() {
    return this.tagService.getTags();
  }
  @Get(':id')
  async getTagById(@Param('id') id: number) {
    return this.tagService.findById(id);
  }
  @Post('/add')
  async addTag(@Body(ValidationPipe) tagDto: AddTagDto): Promise<TagEntity> {
    return this.tagService.create(tagDto);
  }
  @Put('/update/:id')
  async updateTag(
    @Body(ValidationPipe) tagDto: UpdateTagDto,
    @Param('id') id: number,
  ): Promise<TagEntity> {
    return this.tagService.update(id, tagDto);
  }
  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.tagService.delete(id);
  }
}
