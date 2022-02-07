import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('managers')
class Manager {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cellphone: string;

  @Column()
  telephone: string;

  @Column()
  is_janitor: boolean;

  @Column()
  lives_here: boolean;

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

export { Manager };
