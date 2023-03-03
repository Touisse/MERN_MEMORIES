import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts)
  return (
    <div>
      <h1 className={classes.mainContainer}>POSTS</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
