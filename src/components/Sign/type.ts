export interface UserLoginInfo {
  userId: string | File | null;
  password: string | File | null;
}

export interface UserRequstData {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  token_type: string;
  user_permissions: string[];
  user_group: string;
  user_id: string;
}

export interface Receiver {
  receiver: string;
  createUserId: string | File | null;
  createUserClient: string;
}
export interface Verify {
  receiver: string;
  certificationNumber: string;
}

export interface RefreshToken {
  refreshToken: string | undefined;
}
