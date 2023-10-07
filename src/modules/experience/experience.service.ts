import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExperienceEntity } from 'experience/entity/experience.entity';
import { Repository, DeepPartial } from 'typeorm';
import { AddExperienceDto } from 'experience/dto/add-experience.dto';
import { UpdateExperienceDto } from 'experience/dto/update-experience-dto';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectRepository(ExperienceEntity)
    private experienceRepository: Repository<ExperienceEntity>,
  ) {}
  async getExperiences() {
    return this.experienceRepository.find({
      relations: ['experience_details'],
    });
  }
  async findById(id: number) {
    return this.experienceRepository.findOne({ where: { id } });
  }
  async create(
    experienceDto: DeepPartial<AddExperienceDto>,
  ): Promise<ExperienceEntity> {
    const newExperience = this.experienceRepository.create({
      ...experienceDto,
    });
    try {
      await this.experienceRepository.save(newExperience);
    } catch (e) {
      throw new HttpException(
        'Error experience is not create',
        HttpStatus.BAD_REQUEST,
      );
    }
    return newExperience;
  }
  async update(
    id: number,
    experienceDto: DeepPartial<UpdateExperienceDto>,
  ): Promise<ExperienceEntity> {
    if (!this.findById(id)) {
      throw new HttpException(
        "Cette experience Id n'existe pas",
        HttpStatus.BAD_REQUEST,
      );
    }
    const updateExperience = await this.experienceRepository.preload({
      id,
      ...experienceDto,
    });

    try {
      await this.experienceRepository.save(updateExperience);
    } catch (e) {
      throw new HttpException(
        'error Experience not update',
        HttpStatus.BAD_REQUEST,
      );
    }
    return updateExperience;
  }
  async delete(id: number) {
    return await this.experienceRepository.delete(id);
  }
}
