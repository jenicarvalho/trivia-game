import { call, put } from "redux-saga/effects"

import { loadUserFailure, loadUserSuccess } from "./actions"

import UserService from "../../../services/user-service"

export function* getUser() {
  try {
    const response: any = yield call(UserService.getUsers)
    yield put(loadUserSuccess(response))
  } catch (err) {
  
    console.log(err)
    yield put(loadUserFailure())
  }
}
