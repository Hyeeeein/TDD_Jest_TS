export interface IPutPayload {
  age: number;
  job: string;
}

export type IPostPayload = IPutPayload & {
  email: string;
  password: string;
};

export interface ResUserInfo {
  email: string;
  age: number;
  job: string;
}

export interface IUserRequest {
  get: () => Promise<ResUserInfo[]>;
  post: (payload: IPostPayload) => Promise<ResUserInfo>;
  put: (payload: IPutPayload) => Promise<ResUserInfo>;
  patch: (password: string) => void;
  delete: (password: string) => void;
}
