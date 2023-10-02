import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class Timestamps {
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
