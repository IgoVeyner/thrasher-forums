import Authorized from './authorized'
import Unauthorized from './unauthorized'

export default function NavBar({ checkAuthorization }) {

  return (
    <>
      { checkAuthorization() === true ? <Authorized /> : <Unauthorized /> }
    </>
  )
}