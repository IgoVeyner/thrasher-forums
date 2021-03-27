import Board from "./board"

export default function Boards({ boards }) {
  
  const renderBoards = () => {
    return boards.map(board => { 
      return <Board board={board} /> 
    })
  }
  
  return (
    <div>
      {renderBoards()}
    </div>
  )
}