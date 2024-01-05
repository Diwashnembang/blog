import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const nagivate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    data: blog,
    error,
  } = useFetch(`http://localhost:8000/blogs/` + id);
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
      headers: {
        "content-type": "application-json",
      },
    }).then(() => {
      alert("Blog has been delted!!");
      nagivate("/");
    });
  };

  const render = () => (
    <>
      <article>
        <h2>{blog.title}</h2>
        <p>written by {blog.aurthor}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick}>delte</button>
      </article>
    </>
  );

  return (
    <div className="blog-details">
      {isLoading && <div>Loading</div>}
      {error && <div>{error}</div>}
      {blog && render()}
    </div>
  );
};

export default BlogDetails;
