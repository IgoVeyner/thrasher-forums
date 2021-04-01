export default function DummyForm() {

  const handleSubmit = e => e.preventDefault()

  return (
    <div className="dummy-form-container">
      <form className="dummy-form" onSubmit={handleSubmit}>
        <label className="dummy-label">l</label>
        <input type="text" className="dummy-input"/>
      </form>
    </div>
  )
}