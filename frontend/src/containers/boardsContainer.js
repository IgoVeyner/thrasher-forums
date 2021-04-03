import { useEffect } from 'react'
import { getBoards } from '../redux/actions/boardActions'
import { useSelector, useDispatch } from 'react-redux'
import Boards from '../components/boards'

export default function BoardsContainer() {

  const boards = useSelector(state => state.boards)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBoards())
  }, []);

  return (
    <main>
      <div id="boards-container">
        <div id="boards-sub-container">
        
        <div>
          <h1>Boards</h1>
        </div>

        {boards.length > 0 ? <Boards boards={boards} /> : null }

        </div>
      </div>
    </main>
  )
}