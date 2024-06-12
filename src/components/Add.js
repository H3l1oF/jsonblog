import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Add() {

  const formatDate = (date) => {
    return date.toLocaleDateString("pt-PT", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [createAt, setCreateAt] = useState(formatDate(new Date()));
  const [updateAt, setUpdateAt] = useState(formatDate(new Date()));
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3030/posts")
      .then((res) => res.json())
      .then((result) => {
        setId((result.length + 2).toString());
      });
  }, []);

  function send(event) {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        title: title,
        body: body,
        createdAt: createAt,
        updatedAt: updateAt
      }),
    };
    fetch("http://localhost:3030/posts", options);
    navigate("/view");
  }


  return (
    <div className="container border rounded border-dark p-3 bg-secondary text-white">
      <form>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" rows="5" onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <div className="form-group mt-2">
          <button type="submit" onClick={send} className="btn btn-primary">
            <i className="bi bi-plus-circle"></i>
          </button>
          <button type="reset" className="btn btn-warning ms-2">
            <i className="bi bi-x-circle"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
