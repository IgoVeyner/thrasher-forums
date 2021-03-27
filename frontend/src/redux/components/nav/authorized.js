import { Link } from 'react-router-dom' 

export default function Authorized({ handleLogout }) {
  return (
    <>
      <Link to="/#">Events</Link>
      <Link to="/#">Photos</Link>
      <Link to="/#">Videos</Link>
      <button onClick={handleLogout}>LOGOUT</button>
    </>
  )
}