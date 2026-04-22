import React from "react";
import { getPosts } from "./../../lib/post";
import PostCard from "@/components/PostCard";

const page = async () => {
  const postsData = await getPosts();
  console.log(postsData.posts);
  return (
    <div>
      <h1>Posts: {postsData.posts.length} </h1>
      <div className="grid grid-cols-3 gap-5">
        {postsData.posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default page;
