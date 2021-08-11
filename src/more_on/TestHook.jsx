import { useState, useEffect } from "react";
import { useTestHook } from "../context/TestHookProvider";
import axios from "axios";

const TestHook = (props) => {
  const [state, setstate] = useState("Initial State");
  const { changeText, text } = useTestHook();

  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const posts = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (posts) {
      setPosts(posts.data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const changeState = () => {
    setstate("Initial State Changed");
  };

  const changeNameToSteve = () => {
    props.changeName();
  };

  return (
    <div>
      {posts ? <h1 data-testid="title">{posts.title}</h1> : <h1>loading</h1>}
      <button style={{ marginBottom: "1rem" }} onClick={changeText}>
        Change Text
      </button>
      <p>{text}</p> <br />
      <br />
      <button style={{ marginBottom: "1rem" }} onClick={changeState}>
        State Change
      </button>
      <br />
      {state}
      <br />
      <button style={{ margin: "1rem" }} onClick={changeNameToSteve}>
        Change Name
      </button>
      <br />
      <p>{props.name}</p>
    </div>
  );
};

export default TestHook;
