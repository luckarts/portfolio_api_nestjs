import { Column, Entity, PrimaryColumn, OneToOne } from 'typeorm';
import { UserEntity } from 'src/modules/user/entity/user.entity';

@Entity('user_profile')
export class UserProfileEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  img: string;

  @Column()
  description: string;

  @Column()
  cv: string;

  @OneToOne(() => UserEntity, (user) => user.profile)
  user: UserEntity;
}
