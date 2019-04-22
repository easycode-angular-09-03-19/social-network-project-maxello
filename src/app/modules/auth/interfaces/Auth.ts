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

  export interface SignupAnswer {
    error: boolean;
    message: string;
  }

  export interface SignupData {
    email: string;
    nickname: string;
    first_name: string;
    last_name: string;
    password: string;
    gender_orientation: string;
    city: string;
    country: string;
    phone: string;
    date_of_birth_day: string;
    date_of_birth_month: string;
    date_of_birth_year: string;
  }
}
