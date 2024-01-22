import { PostCard } from "@/components/PostCard";
import { Suspense } from "react";
async function loadPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function page({ params }) {
  console.log(params.id);
  const post = await loadPostById(params.id);
  return (
    <div>
      <h1>Post By Id</h1>
      <Suspense fallback={<div>Cargando</div>}>
        <PostCard post={post}></PostCard>
      </Suspense>
    </div>
  );
}

export default page;
