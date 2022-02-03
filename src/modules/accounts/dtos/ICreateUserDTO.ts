interface ICreateUserDTO {
  id?: string;
  name: string;
  username: string;
  avatar?: string;
  password: string;
  birth_date: Date;
}

export { ICreateUserDTO };
