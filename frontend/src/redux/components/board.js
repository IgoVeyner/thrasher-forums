import { Link } from 'react-router-dom'

export default function Board({ board }) {

  const renderDescription = () => {
    if (board.description) {
      return <p>{board.description}</p>
    }
  }

  return (
    <Link to={`/${board.name}`}>
      <div>
        <p>{board.name}</p>
        {renderDescription()}
      </div>
    </Link>
  )
}