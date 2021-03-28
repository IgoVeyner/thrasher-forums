import { combineReducers } from "redux"
import handleUsers from './userReducer'
import handleBoards from './boardReducer'
import handleBusy from './busyReducer';

const rootReducer = combineReducers({
  busy: handleBusy,
  user: handleUsers,
  boards: handleBoards
})

export default rootReducer