import Board from "./board"
import uuid from 'react-uuid'

export default function Boards({ boards }) {
  
  const renderBoards = () => {
    return boards.map(board => { 
      return <Board key={uuid()} board={board} /> 
    })
  }
  
  return (
    <div id="boards-list-container">
      {renderBoards()}
    </div>
  )
}