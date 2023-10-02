import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
/**
 * custom base entity
 */
export abstract class CustomBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
