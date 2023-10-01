/**
 * [Description ExperienceEntity]
 */

import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';
import { ExperienceEntity } from 'experience/entity/experience.entity';

@Entity({ name: 'experience_detail' })
export class ExperienceDetailEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(
    () => ExperienceEntity,
    (experience) => experience.experience_details,
  )
  experience: ExperienceEntity;

  @Column()
  experienceId: number;
}
