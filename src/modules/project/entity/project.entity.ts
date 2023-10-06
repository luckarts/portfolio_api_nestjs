import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  Index,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Timestamps } from 'src/common/entity/Timestamps.entity';
import { TagEntity } from 'tag/entity/tag.entity';

@Entity({ name: 'project' })
export class ProjectEntity extends Timestamps {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  img: string;

  @Index({
    unique: true,
  })
  @Column({
    length: 50,
  })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  path_repo: string;

  @Column({ type: 'text', nullable: true })
  path_website: string;

  @Index({
    unique: true,
  })
  @Column()
  position: number;

  @ManyToMany(() => TagEntity, (tag) => tag.projects)
  @JoinTable({
    name: 'project_tag',
    joinColumn: {
      name: 'project_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  tags: TagEntity[];
}
