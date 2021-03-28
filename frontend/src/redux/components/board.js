export default function Board({ board }) {

  const renderDescription = () => {
    if (board.description) {
      return <p>{board.description}</p>
    }
  }

  return (
    <div>
      <p>{board.name}</p>
      {renderDescription()}
    </div>
  )
}