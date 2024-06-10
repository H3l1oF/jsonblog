import React from "react";

function Add() {
  return (
    <div className="container border rounded border-dark p-3 bg-secondary text-white">
      <form action="/add">
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <div className="form-group mt-2">
          <button type="submit" className="btn btn-primary">
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

export default Add
