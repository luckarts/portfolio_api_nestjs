import { Column, Entity, JoinTable, JoinColumn, OneToOne } from 'typeorm';
import { CustomBaseEntity } from 'src/common/entity/custom-base.entity';
import { UserProfileEntity } from 'src/modules/user_profile/entity/user_profile.entity';

@Entity('user')
export class UserEntity extends CustomBaseEntity {
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
