import { useState } from 'react'

export default function Comment({ user, submitComment, postId }) {

  const [text, setText] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    submitComment({ comment: {
      text,
      post_id: postId,
      username: user
    }})
    setText("")
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
    <div id="comment-form-container">
      <form onSubmit={handleSubmit} id="comment-form">

        <div id="comment-form-header-container">
          <h1 id="comment-form-header">New Comment</h1>
        </div>

        <div className="comment-input-container">
          <label className="comment-label">comment text</label>

          <textarea 
            className="comment-input"
            name="text"
            onChange={handleChange}
            value={text}
          />
        </div>
        
        <div className="comment-button-container">
          <input 
            className="button signup-button"
            type="submit" 
            value="Post Comment" 
          />
        </div>

      </form>

    </div>
  )
}