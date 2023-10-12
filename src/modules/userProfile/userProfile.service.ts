import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfileEntity } from 'userProfile/entity/userProfile.entity';
import { Repository, DeepPartial } from 'typeorm';
import { AddUserProfileDto } from 'userProfile/dto/add-userProfile.dto';
import { UpdateUserProfileDto } from 'userProfile/dto/update-userProfile-dto';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(UserProfileEntity)
    private projectRepository: Repository<UserProfileEntity>,
  ) {}
  async getProjects() {
    return this.projectRepository.find({
      relations: ['tags'],
    });
  }
  async findById(id: number) {
    return this.projectRepository.findOne({ where: { id } });
  }
  async create(
    projectDto: DeepPartial<AddUserProfileDto>,
  ): Promise<UserProfileEntity> {
    const newProject = this.projectRepository.create({ ...projectDto });
    try {
      await this.projectRepository.save(newProject);
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
    projectDto: DeepPartial<UpdateUserProfileDto>,
  ): Promise<UserProfileEntity> {
    if (!this.findById(id)) {
      throw new HttpException(
        'Le userName and password doivent etre unique',
        HttpStatus.BAD_REQUEST,
      );
    }
    const updateProject = await this.projectRepository.preload({
      id,
      ...projectDto,
    });

    try {
      await this.projectRepository.save(updateProject);
    } catch (e) {
      throw new HttpException(
        'Le userName and password doivent etre unique',
        HttpStatus.BAD_REQUEST,
      );
    }
    return updateProject;
  }
  async delete(id: number) {
    return await this.projectRepository.delete(id);
  }
}
