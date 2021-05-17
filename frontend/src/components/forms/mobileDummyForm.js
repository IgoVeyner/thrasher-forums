export default function MobileDummyForm() {

  const handleSubmit = e => e.preventDefault()

  return (
    <div className="dummy-mobile-form-container">
      <form className="dummy-form" onSubmit={handleSubmit}>
        <label className="dummy-label">l</label>
        <input type="text" className="dummy-input"/>
      </form>
    </div>
  )
}