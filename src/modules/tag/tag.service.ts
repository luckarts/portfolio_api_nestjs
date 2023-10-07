import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagEntity } from 'tag/entity/tag.entity';
import { Repository, DeepPartial } from 'typeorm';
import { AddTagDto } from 'tag/dto/add-tag.dto';
import { UpdateTagDto } from 'tag/dto/update-tag-dto';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private tagRepository: Repository<TagEntity>,
  ) {}
  async getTags() {
    return this.tagRepository.find();
  }
  async findById(id: number) {
    return this.tagRepository.findOne({ where: { id } });
  }
  async create(TagDto: DeepPartial<AddTagDto>): Promise<TagEntity> {
    const newTag = this.tagRepository.create({ ...TagDto });
    try {
      await this.tagRepository.save(newTag);
    } catch (e) {
      throw new HttpException(
        'Le userName and password doivent etre unique',
        HttpStatus.BAD_REQUEST,
      );
    }
    return newTag;
  }
  async update(
    id: number,
    experienceDto: DeepPartial<UpdateTagDto>,
  ): Promise<TagEntity> {
    if (!this.findById(id)) {
      throw new HttpException(
        'Ce tag doivent etre unique',
        HttpStatus.BAD_REQUEST,
      );
    }
    const updateTag = await this.tagRepository.preload({
      id,
      ...experienceDto,
    });

    try {
      await this.tagRepository.save(updateTag);
    } catch (e) {
      throw new HttpException(
        'Ce tag doit etre unique',
        HttpStatus.BAD_REQUEST,
      );
    }
    return updateTag;
  }
  async delete(id: number) {
    return await this.tagRepository.delete(id);
  }
}
