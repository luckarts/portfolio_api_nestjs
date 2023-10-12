import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { UserProfileEntity } from 'src/modules/userProfile/entity/userProfile.entity';
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
