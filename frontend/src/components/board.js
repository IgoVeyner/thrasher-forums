import { Link } from 'react-router-dom'

export default function Board({ board }) {

  const renderDescription = () => {
    if (board.description) {
      return <p className="board-description">{board.description}</p>
    }
  }

  return (
    <Link to={`/boards/${board.name.toLowerCase()}`} className="board-link" >
      <div className="board-text">
        <h2 className="board-title">{board.name}</h2>
        {renderDescription()}
      </div>
    </Link>
  )
}