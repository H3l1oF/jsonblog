import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Edit() {
  useEffect(() => {
    fetch(`http://localhost:3030/posts/${id}`)
      .then(res => res.json())
      .then((result) => {
        setOnlyOne(result)
      })
  }, [])

  const navigate = useNavigate()
  const { id } = useParams()
  const [onlyOne, setOnlyOne] = useState([])

  return (
    <div className="container border rounded border-dark p-3 bg-secondary text-white">
    <form action="/add">
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" value={onlyOne.title} />
      </div>
      <div className="form-group">
        <label>Content</label>
        <textarea className="form-control" rows="5" value={onlyOne.body}></textarea>
      </div>
      <div className="form-group mt-2">
        <button type="submit" className="btn btn-primary">
          <i className="bi bi-pencil"></i>
        </button>
        <button type="button" onClick={() => navigate('/view')} className="btn btn-warning ms-2">
          <i className="bi bi-backspace-reverse"></i>
        </button>
      </div>
    </form>
  </div>
  )
}

export default Edit