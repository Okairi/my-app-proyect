import { PostCard } from "@/components/PostCard";

async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return data;
}

async function PostOPages() {
  const posts = await loadPost();

  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostOPages;
