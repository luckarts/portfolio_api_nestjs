import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ExperienceDetailEntity } from 'experienceDetail/entity/experienceDetail.entity';

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
