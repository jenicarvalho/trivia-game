import { action } from "typesafe-actions"
import { UserTypes, User } from "./types"

export const loadUserRequest = () => action(UserTypes.GET_USER_REQUEST)
export const loadUserSuccess = (data: User[]) => action(UserTypes.GET_USER_SUCCESS, data)
export const loadUserFailure = () => action(UserTypes.GET_USER_FAILURE)
