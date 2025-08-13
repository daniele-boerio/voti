import type { User } from '../../../utils/login/interfaces';
import type { RootState } from '../../store';

export const selectLoginUsers = (state: RootState): User[] => state.login.userList;
export const selectLoginLoading = (state: RootState): boolean => state.login.loading;
