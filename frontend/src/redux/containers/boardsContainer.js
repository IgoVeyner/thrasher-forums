import { useEffect } from 'react'
import { getBoards } from '../actions/boardActions'
import { useDispatch } from 'react-redux'

export default function BoardsContainer() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBoards())
  }, []);

  return (
    <div>
      <h1>Boards</h1>
      <ul>
        
      </ul>
    </div>
  )
}