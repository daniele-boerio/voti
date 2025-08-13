export interface LoginState {
  loading: boolean;
  userList: User[];
  selectedUser: User | undefined;
}

export interface User {
  id: number;
  name: string;
  participant: string;
}
