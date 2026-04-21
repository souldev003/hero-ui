import React from "react";
import { getPosts } from "./../../lib/post";

const page = async () => {
  const posts = await getPosts();
  console.log(posts.posts);
  return (
    <div>
      <h1>Posts</h1>
      <ul className="grid grid-cols-4 gap-5">
        {posts.posts.map((post) => (
          <li
            className="bg-lime-300 border-2 rounded-full border-green-500 p-6 flex flex-col items-center justify-center gap-5"
            key={post.id}
          >
            <h2
              className="text-xl font-bold text-center text-gray-800 dark:text-white
            "
            >
              {post.title}
            </h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
