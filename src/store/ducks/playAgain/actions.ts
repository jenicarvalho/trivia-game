import { action } from "typesafe-actions"
import { ResetTypes } from "./types"

export const setReset = () => action(ResetTypes.RESET_GAME)
