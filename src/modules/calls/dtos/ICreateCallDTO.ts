interface ICreateCallsDTO {
  user_id: string;
  client_id: string;
  technician_id?: string;
  client_name: string;
  description: string;
  is_open?: boolean;
  is_pending?: boolean;
}

export { ICreateCallsDTO };
