export interface UserResponse {
  accessToken: string;
  sessoinId: string;
  sessonExpiry: number;
}

export interface JWT {
  username: string;
  fullName: string;
  pic: string;
  exp: number;
}

export interface userSession extends JWT {
  accessToken: string;
  sessionId: string;
  sessonExpiry: number;
}
