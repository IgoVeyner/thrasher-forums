import { useEffect } from 'react'
import { getBoards } from '../actions/boardActions'
import { useSelector, useDispatch } from 'react-redux'
import Boards from '../components/boards'

export default function BoardsContainer() {

  const boards = useSelector(state => state.boards)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBoards())
  }, []);

  return (
    <div>
      <h1>Boards</h1>
      {boards.length > 0 ? <Boards boards={boards} /> : null }
    </div>
  )
}