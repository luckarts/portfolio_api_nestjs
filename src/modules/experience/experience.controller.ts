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
import { ProjectService } from 'experience/experience.service';
import { AddExperienceDto } from 'experience/dto/add-experience.dto';
import { ExperienceEntity } from 'experience/entity/experience.entity';
import { UpdateExperienceDto } from 'experience/dto/update-experience-dto';

ApiTags('experiences');
@Controller('experiences')
export class ExperienceController {
  constructor(private readonly experienceService: ProjectService) {}

  @Get('/all')
  async getProjects() {
    return this.experienceService.getProjects();
  }
  @Get(':id')
  async getProjetById(@Param('id') id: number) {
    return this.experienceService.findById(id);
  }
  @Post('/add')
  async addProject(
    @Body(ValidationPipe) experienceDto: AddExperienceDto,
  ): Promise<ExperienceEntity> {
    return this.experienceService.create(experienceDto);
  }
  @Put('/update/:id')
  async updateProject(
    @Body(ValidationPipe) experienceDto: UpdateExperienceDto,
    @Param('id') id: number,
  ): Promise<ExperienceEntity> {
    return this.experienceService.update(id, experienceDto);
  }
  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.experienceService.delete(id);
  }
}
