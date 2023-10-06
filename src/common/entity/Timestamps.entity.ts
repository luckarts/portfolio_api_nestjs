import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class Timestamps {
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;
}
