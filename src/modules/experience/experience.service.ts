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
  async getProjects() {
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
    const newProject = this.experienceRepository.create({ ...experienceDto });
    try {
      await this.experienceRepository.save(newProject);
    } catch (e) {
      throw new HttpException(
        'Le userName and password doivent etre unique',
        HttpStatus.BAD_REQUEST,
      );
    }
    return newProject;
  }
  async update(
    id: number,
    experienceDto: DeepPartial<UpdateExperienceDto>,
  ): Promise<ExperienceEntity> {
    if (!this.findById(id)) {
      throw new HttpException(
        'Le userName and password doivent etre unique',
        HttpStatus.BAD_REQUEST,
      );
    }
    const updateProject = await this.experienceRepository.preload({
      id,
      ...experienceDto,
    });

    try {
      await this.experienceRepository.save(updateProject);
    } catch (e) {
      throw new HttpException(
        'Le userName and password doivent etre unique',
        HttpStatus.BAD_REQUEST,
      );
    }
    return updateProject;
  }
  async delete(id: number) {
    return await this.experienceRepository.delete(id);
  }
}
