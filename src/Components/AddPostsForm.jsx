import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsAdded } from "../features/posts/postsSlice";
import { selectAllUsers } from "../features/users/usersSlice";

const AddPostsForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const users = useSelector(selectAllUsers);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const onSavePostChange = (e) => {
    e.preventDefault();

    if (title && content) {
      dispatch(postsAdded(title, content, userId));
    }
    setContent("");
    setTitle("");
  };

  const userOptions = users.map((item) => {
    return (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );
  });

  return (
    <>
      <section>
        <h2>Add a new Post</h2>
        <form onSubmit={onSavePostChange}>
          <label htmlFor="posts__title">Post Title</label>
          <input
            type="text"
            name="post__title"
            id="post__title"
            value={title}
            onChange={onTitleChange}
          />

          <label htmlFor="posts__author"></label>
          <select
            name="posts__author"
            id="posts__author"
            value={userId}
            onChange={onAuthorChange}
          >
            <option value=""></option>
            {userOptions}
          </select>
          <label htmlFor="posts__title">Post Content</label>
          <input
            type="text"
            name="post__content"
            id="post__content"
            value={content}
            onChange={onContentChange}
          />
          <button className="btn" type="submit" disabled={!canSave}>
            add post
          </button>
        </form>
      </section>
    </>
  );
};

export default AddPostsForm;
