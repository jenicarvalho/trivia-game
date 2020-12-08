import { Reducer } from "redux"
import { Resetstate, ResetTypes } from "./types"

const INITIAL_STATE: Resetstate = {
  reset: false
}

const reducer: Reducer<Resetstate> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ResetTypes.RESET_GAME:
      return {...state}
    default:
      return state
  }
}

export default reducer
