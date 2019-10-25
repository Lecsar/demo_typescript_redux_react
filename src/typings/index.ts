import { InferableComponentEnhancerWithProps } from 'react-redux';

export type TypeOfConnect<T> = T extends InferableComponentEnhancerWithProps<
  infer Props,
  infer _
>
  ? Props
  : never;

// export interface UserData {
//     login: string | null;
//     role: Roles | null;
// }

// export enum Roles {
//     USER = 'USER',
//     ADMIN = 'ADMIN',
// }

// export enum ErrorMessage {
//     INVALID = 'Invalid login or password',
// }

// export interface AuthData {
//     password?: string;
//     login?: string;
//     authToken?: string;
// }

// export interface User {
//     login: string;
//     password: string;
//     token: string;
//     role: Roles;
// }

// export interface AuthResponse {
//     error: false | ErrorMessage;
//     login: string | null;
//     token: string | null;
//     role: Roles | null;
// }

// export interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }
