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
import { ExperienceDetailsService } from 'experienceDetail/experienceDetail.service';
import { AddExperienceDetailsDto } from 'experienceDetail/dto/add-experienceDetail.dto';
import { ExperienceDetailEntity } from 'experienceDetail/entity/experienceDetail.entity';
import { UpdateExperienceDetailsDto } from 'experienceDetail/dto/update-experienceDetail-dto';
ApiTags('projects');
@Controller('projects')
export class ProjectController {
  constructor(
    private readonly ExperienceDetailsService: ExperienceDetailsService,
  ) {}

  @Get('/all')
  async getExperienceDetails() {
    return this.ExperienceDetailsService.getExperienceDetails();
  }
  @Get(':id')
  async getProjetById(@Param('id') id: number) {
    return this.ExperienceDetailsService.findById(id);
  }
  @Post('/add')
  async addProject(
    @Body(ValidationPipe) projectTdo: AddExperienceDetailsDto,
  ): Promise<ExperienceDetailEntity> {
    return this.ExperienceDetailsService.create(projectTdo);
  }
  @Put('/update/:id')
  async updateExperienceDetails(
    @Body(ValidationPipe) projectTdo: UpdateExperienceDetailsDto,
    @Param('id') id: number,
  ): Promise<ExperienceDetailEntity> {
    return this.ExperienceDetailsService.update(id, projectTdo);
  }
  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.ExperienceDetailsService.delete(id);
  }
}
