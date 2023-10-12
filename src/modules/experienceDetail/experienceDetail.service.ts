import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExperienceDetailEntity } from 'experienceDetail/entity/experienceDetail.entity';
import { Repository, DeepPartial } from 'typeorm';
import { AddExperienceDetailsDto } from 'experienceDetail/dto/add-experienceDetail.dto';
import { UpdateExperienceDetailsDto } from 'experienceDetail/dto/update-experienceDetail-dto';

@Injectable()
export class ExperienceDetailsService {
  constructor(
    @InjectRepository(ExperienceDetailEntity)
    private experienceDetailRepository: Repository<ExperienceDetailEntity>,
  ) {}
  async getExperienceDetails() {
    return this.experienceDetailRepository.find();
  }
  async findById(id: number) {
    return this.experienceDetailRepository.findOne({ where: { id } });
  }
  async create(
    projectDto: DeepPartial<AddExperienceDetailsDto>,
  ): Promise<ExperienceDetailEntity> {
    const newExperienceDetails = this.experienceDetailRepository.create({
      ...projectDto,
    });
    try {
      await this.experienceDetailRepository.save(newExperienceDetails);
    } catch (e) {
      throw new HttpException(
        'Le userName and password doivent etre unique',
        HttpStatus.BAD_REQUEST,
      );
    }
    return newExperienceDetails;
  }
  async update(
    id: number,
    projectDto: DeepPartial<UpdateExperienceDetailsDto>,
  ): Promise<ExperienceDetailEntity> {
    if (!this.findById(id)) {
      throw new HttpException(
        'Le userName and password doivent etre unique',
        HttpStatus.BAD_REQUEST,
      );
    }
    const updateExperienceDetails =
      await this.experienceDetailRepository.preload({
        id,
        ...projectDto,
      });

    try {
      await this.experienceDetailRepository.save(updateExperienceDetails);
    } catch (e) {
      throw new HttpException(
        'Le userName and password doivent etre unique',
        HttpStatus.BAD_REQUEST,
      );
    }
    return updateExperienceDetails;
  }
  async delete(id: number) {
    return await this.experienceDetailRepository.delete(id);
  }
}
