import { combineReducers } from "redux"
import handleUsers from './userReducer'

const rootReducer = combineReducers({
  user: handleUsers
})

export default rootReducer