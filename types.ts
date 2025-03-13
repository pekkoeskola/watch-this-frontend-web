export interface LoginDetails {
  username: string;
  password: string;
}

export interface AuthState {
  username?: string;
  id?: number;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterURL?: string;
  rating: number;
}

export interface Group {
  id: number;
  name: string;
}

export interface AddRatingParams {
  movieID: number;
  userID?: number;
  rating: number;
}

export interface Rating {
  id: string;
  movieID: number;
  userID: number;
  rating: number;
}
