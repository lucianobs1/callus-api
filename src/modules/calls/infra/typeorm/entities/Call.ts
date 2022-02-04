import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('calls')
class Call {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  client_id: string;

  @Column()
  technician_id: string;

  @Column()
  client_name: string;

  @Column()
  description: string;

  @Column()
  is_open: boolean;

  @Column()
  is_pending: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Call };
