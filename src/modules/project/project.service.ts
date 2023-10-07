import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from 'project/entity/project.entity';
import { Repository, DeepPartial } from 'typeorm';
import { AddProjectDto } from 'project/dto/add-project.dto';
import { UpdateProjectDto } from 'project/dto/update-project-dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
  ) {}
  async getProjects() {
    return this.projectRepository.find({
      relations: ['tags'],
    });
  }
  async findById(id: number) {
    return this.projectRepository.findOne({ where: { id } });
  }
  async create(projectDto: DeepPartial<ProjectEntity>): Promise<ProjectEntity> {
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
    projectDto: DeepPartial<ProjectEntity>,
  ): Promise<ProjectEntity> {
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
