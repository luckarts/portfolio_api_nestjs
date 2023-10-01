import { Column, Entity, Index, ManyToMany, JoinTable } from 'typeorm';
import { CustomBaseEntity } from 'src/common/entity/custom-base.entity';
import { TagEntity } from 'tag/entity/tag.entity';
@Entity({ name: 'project' })
export class ProjectEntity extends CustomBaseEntity {
  @Column()
  img: string;

  @Index({
    unique: true,
  })
  @Column({
    length: 50,
  })
  title: string;

  @Column()
  description: string;

  @Column()
  path_repo: string;

  @Column()
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
      name: 'projectId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tagId',
      referencedColumnName: 'id',
    },
  })
  tags: TagEntity[];
}
