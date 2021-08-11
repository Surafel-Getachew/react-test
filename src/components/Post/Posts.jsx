import { useEffect, useState } from "react";
import AddNewPostBtn from "./AddNewPostBtn";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [formVisable, setFormVisable] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  const { title, body } = newPost;
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts([data, ...posts]);
        // setFormVisable(false)
        setNewPost({ title: "", body: "" });
      });
  };
  const onCancel = () => {
    setFormVisable(false);
    setNewPost({ title: "", body: "" });
  };
  const onChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {!formVisable && (
        // <button
        //   onClick={() => {
        //     setFormVisable(true);
        //   }}
        // >
        //   Add New Post
        // </button>
        <AddNewPostBtn
          onClick={() => {
            setFormVisable(true);
          }}
        />
      )}

      {formVisable && (
        <form onSubmit={handleSubmit}>
          <h3>New Post</h3>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            placeholder="Title"
          />
          <br />
          <textarea
            type="text"
            name="body"
            value={body}
            onChange={onChange}
            placeholder="Body"
          />
          <br />
          <button type="submit">Submit</button>
          <button onClick={onCancel}>Cancel</button>
        </form>
      )}
      <h1>Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
