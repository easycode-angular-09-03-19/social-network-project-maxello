// export interface LoginServerAnswer {
//   id?: string;
//   token?: string;
//   error: boolean;
//   message: string;
// }

export namespace Auth {
  export interface LoginServerAnswer {
    id?: string;
    token?: string;
    error: boolean;
    message: string;
  }

  export interface ResetPasswordAnswer {
    error: boolean;
    message: string;
  }
}
