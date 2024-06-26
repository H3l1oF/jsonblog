import React from "react";
import { useState, useEffect } from "react";
import Cardnew from "./Cardnew";


function View() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/posts")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);


  return (
    <div className="d-flex flex-wrap justify-content-around">
      {posts.map((i) => (
        <Cardnew key={i.id} id={i.id} title={i.title} content={i.body} updatedAt={i.updatedAt} />
      ))}
    </div>
  );
}

export default View;
