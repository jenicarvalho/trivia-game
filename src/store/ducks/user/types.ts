/**
 * Action Types
 */
export enum UserTypes {
  GET_USER_REQUEST = '@user/GET_USER_REQUEST',
  GET_USER_SUCCESS = '@user/GET_USER_SUCCESS',
  GET_USER_FAILURE = '@user/GET_USER_FAILURE'
}

/**
 * Data Types
 */
export interface User {
  id: number,
  name: string,
  username: string
}
