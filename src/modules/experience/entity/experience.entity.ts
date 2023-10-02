import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { ExperienceDetailEntity } from 'experience_detail/entity/experience_detail.entity';

@Entity({ name: 'experience' })
export class ExperienceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  year: number;

  @Column()
  job: string;

  @Column()
  company: string;

  @Column()
  url_company: string;

  @OneToMany(
    () => ExperienceDetailEntity,
    (experienceDetail) => experienceDetail.experience,
  )
  experience_details: ExperienceDetailEntity[];
}
