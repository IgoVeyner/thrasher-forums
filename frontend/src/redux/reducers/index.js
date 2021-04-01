import { combineReducers } from "redux"
import handleUsers from './userReducer'
import handleBoards from './boardReducer'
import handleBusy from './busyReducer'
import handlePosts from './postReducer'
import handleComments from './commentReducer'

const rootReducer = combineReducers({
  busy: handleBusy,
  user: handleUsers,
  boards: handleBoards,
  posts: handlePosts,
  comments: handleComments
})

export default rootReducer