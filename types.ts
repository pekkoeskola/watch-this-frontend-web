export interface LoginDetails {
  username: string;
  password: string;
}

export interface AuthState {
  username: string | null;
  id: number | null;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterURL?: string;
}

export interface Group {
  id: number;
  name: string;
}
