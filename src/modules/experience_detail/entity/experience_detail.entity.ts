/**
 * [Description ExperienceEntity]
 */

import {
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  Entity,
  ManyToOne,
} from 'typeorm';
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
  @JoinColumn({ name: 'experience_id' })
  experience: ExperienceEntity;
}
