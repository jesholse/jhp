import React from "react";

const PostComponent = ({ path, slug, title }) => {
  return (
    <div
      transition:animate="initial"
      transition:name={path === `/posts/${slug}` ? "active" : undefined}
      class={
        "p-2 h-fit pb-2 " + (path === `/posts/${slug}` ? "text-slate-700 " : "")
      }
    >
      <h3 class="text-sm">{title}</h3>
      <a href={`/posts/${slug}`} class="underline text-xs">
        Läs mer
      </a>
    </div>
  );
};

export default PostComponent;
