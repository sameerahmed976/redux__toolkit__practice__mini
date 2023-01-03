import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/usersSlice";

const PostsAuthor = ({ userId }) => {
  console.log(`* ~ file: PostsAuthor.jsx:6 ~ PostsAuthor ~ userId`, userId);
  const users = useSelector(selectAllUsers);
  console.log(`* ~ file: PostsAuthor.jsx:7 ~ PostsAuthor ~ users`, users);
  // const = author;
  const author = users.find((item) => item.id === userId);
  console.log(`* ~ file: PostsAuthor.jsx:10 ~ PostsAuthor ~ author`, author);
  return (
    <>
      By <span>{author ? author.name : "unknown author"}</span>
    </>
  );
};

export default PostsAuthor;
