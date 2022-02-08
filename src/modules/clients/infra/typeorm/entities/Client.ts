import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Manager } from './Manager';

@Entity('clients')
class Client {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  manager_id: string;

  @ManyToOne(() => Manager)
  @JoinColumn({ name: 'manager_id' })
  manager: Manager;

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

export { Client };
