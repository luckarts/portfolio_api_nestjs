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
import { ProjectService } from 'project/project.service';
import { AddProjectDto } from 'project/dto/add-project.dto';
import { ProjectEntity } from 'project/entity/project.entity';
import { UpdateProjectDto } from 'project/dto/update-project-dto';
ApiTags('projects');
@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('/all')
  async getProjects() {
    return this.projectService.getProjects();
  }
  @Get(':id')
  async getProjetById(@Param('id') id: number) {
    return this.projectService.findById(id);
  }
  @Post('/add')
  async addProject(
    @Body(ValidationPipe) projectTdo: AddProjectDto,
  ): Promise<ProjectEntity> {
    return this.projectService.create(projectTdo);
  }
  @Put('/update/:id')
  async updateProject(
    @Body(ValidationPipe) projectTdo: UpdateProjectDto,
    @Param('id') id: number,
  ): Promise<ProjectEntity> {
    return this.projectService.update(id, projectTdo);
  }
  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.projectService.delete(id);
  }
}
