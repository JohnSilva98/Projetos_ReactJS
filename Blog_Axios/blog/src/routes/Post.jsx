import blogFetch from "../axios/config";
import { useState } from "react";
import { useParams } from "react-router-dom";

import "./Post.css";
const Post = () => {
  const [post, setPost] = useState();

  const getPost = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
