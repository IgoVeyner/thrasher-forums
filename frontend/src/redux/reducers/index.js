import { combineReducers } from "redux"
import handleUsers from './userReducer'
import handleBoards from './boardReducer'
import handleBusy from './busyReducer'
import handlePosts from './postReducer'

const rootReducer = combineReducers({
  busy: handleBusy,
  user: handleUsers,
  boards: handleBoards,
  posts: handlePosts
})

export default rootReducer