import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/postsSlice";
import PostsAuthor from "./PostsAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section className="posts">
        <h2>Posts</h2>
        {orderedPosts.map((item) => {
          const { id, title, content } = item;
          console.log(`* ~ file: PostsList.jsx:14 ~ {posts.map ~ id`, id);
          return (
            <article key={id}>
              <h3 className="posts___title">{title}</h3>
              <p className="posts__content">{content.substring(0, 10)}</p>
              <p className="post__credits">
                <PostsAuthor userId={item.userId} />
                <TimeAgo timestamp={item.date} />
              </p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default PostsList;
