import { Reducer } from "redux"
import { UserTypes } from "./types"

const INITIAL_STATE: any = {
  arrayDeUsuarios: [],
  loading: false,
  error: false
}

const reducer: Reducer<any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.GET_USER_REQUEST:
      return { ...state, loading: true }
    case UserTypes.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        arrayDeUsuarios: action.payload.data
      }
    case UserTypes.GET_USER_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default reducer
