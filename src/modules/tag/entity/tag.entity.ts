import { Column, ManyToMany, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectEntity } from 'project/entity/project.entity';

@Entity({ name: 'tag' })
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @Column()
  enable: boolean;

  @ManyToMany(() => ProjectEntity, (project) => project.tags)
  projects: ProjectEntity[];
}
