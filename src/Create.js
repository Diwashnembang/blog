import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [aurthor, setAurthor] = useState("diwash");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault(); //preventing broweser to refresh when submit button is pressed
    const blog = { title, body, aurthor };
    setIsLoading(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsLoading(false);
      setBody("");
      setTitle("");
      navigate("/");
    });
  };
  const renderComponent = () => {
    return (
      <>
        <h2>Add a new blog</h2>
        <form onSubmit={handelSubmit}>
          <label>Blog title:</label>
          <input type="text" required onChange={handleTitle} value={title} />
          <label>Blog body</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog Aurthor</label>
          <select value={aurthor} onChange={(e) => setAurthor(e.target.value)}>
            <option value="diwash">diwash</option>
            <option value="nembang">nembang</option>
          </select>
          <button type="submit">Add blog</button>
        </form>
      </>
    );
  };
  return (
    <div className="create">
      {isLoading && <div>loading....</div>}
      {!isLoading && renderComponent()}
    </div>
  );
};

export default Create;
