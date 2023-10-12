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
import { UserProfileService } from 'userProfile/userProfile.service';
import { AddUserProfileDto } from 'userProfile/dto/add-userProfile.dto';
import { UserProfileEntity } from 'userProfile/entity/userProfile.entity';
import { UpdateUserProfileDto } from 'userProfile/dto/update-userProfile-dto';

ApiTags('userProfile');
@Controller('userProfile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Get('/all')
  async getProjects() {
    return this.userProfileService.getProjects();
  }
  @Get(':id')
  async getProjetById(@Param('id') id: number) {
    return this.userProfileService.findById(id);
  }

  @Post('/add')
  async addProject(
    @Body(ValidationPipe) projectTdo: AddUserProfileDto,
  ): Promise<UserProfileEntity> {
    return this.userProfileService.create(projectTdo);
  }

  @Put('/update/:id')
  async updateProject(
    @Body(ValidationPipe) projectTdo: UpdateUserProfileDto,
    @Param('id') id: number,
  ): Promise<UserProfileEntity> {
    return this.userProfileService.update(id, projectTdo);
  }
  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.userProfileService.delete(id);
  }
}
