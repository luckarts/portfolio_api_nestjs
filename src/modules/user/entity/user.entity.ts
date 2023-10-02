import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { CustomBaseEntity } from 'src/common/entity/custom-base.entity';
import { UserProfileEntity } from 'src/modules/user_profile/entity/user_profile.entity';
import { Timestamps } from 'src/common/entity/Timestamps.entity';

@Entity('user')
export class UserEntity extends Timestamps {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => UserProfileEntity, (userProfile) => userProfile.user, {
    cascade: true,
  })
  profile: UserProfileEntity;
}
