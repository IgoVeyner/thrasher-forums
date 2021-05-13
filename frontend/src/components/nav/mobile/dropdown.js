export default function DropDown({ user, handleLogout }) {

  return (
    <div id="mobile-dropdown">
      { user !== "" ? 
        <Authorized handleLogout={handleLogout} /> 
        : 
        <Unauthorized /> 
      }
    </div>
  )
}