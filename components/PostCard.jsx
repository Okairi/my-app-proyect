"use client";

export const PostCard = ({ post }) => {
  const redirect = () => {};

  return (
    <div>
      <h3>
        {post.id} . {post.title}
      </h3>
      <p>{post.body}</p>
      <button onClick={() => {}}>Click</button>
    </div>
  );
};
