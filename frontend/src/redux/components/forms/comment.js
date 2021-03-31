import { useState } from 'react'

export default function Comment() {

  const [text, setText] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // use submitComment from commentContainer
  }

  const handleChange = e => {
    switch (e.target.name) {
      case 'text':
        setText(e.target.value)
        break
    
      default:
        break
    }
  }

  return (
    <>
      <h2>New Comment</h2>
      <form>

        <input 
          name="text"
          onChange={handleChange}
          value={text}
          placeholder="comment text"
        />
        
        <input type="submit" value="Post Comment" />

      </form>
    </>
  )
}