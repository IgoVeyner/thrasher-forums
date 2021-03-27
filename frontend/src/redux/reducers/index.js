import { combineReducers } from "redux"
import handleUsers from './userReducer'
import handleBoards from './boardReducer'

const rootReducer = combineReducers({
  user: handleUsers,
  boards: handleBoards
})

export default rootReducer