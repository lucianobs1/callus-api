import { v4 as uuidV4 } from 'uuid';

class User {
  id?: string;
  name: string;
  username: string;
  password: string;
  avatar?: string;
  is_admin?: boolean;
  birth_date: Date;
  created_at?: Date;
  updated_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
    if (!this.is_admin) {
      this.is_admin = false;
    }
    if (!this.created_at) {
      this.created_at = new Date();
    }
    if (!this.updated_at) {
      this.updated_at = new Date();
    }
    if (!this.avatar) {
      this.avatar = null;
    }
  }
}

export { User };
