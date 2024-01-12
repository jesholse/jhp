import React from "react";
import { useState, useEffect } from "react";
import PostComponent from "./PostComponent.jsx";

const RecentPosts = ({ path }) => {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/posts.json");
      const data = await res.json();
      setPosts(data.posts);
    })();
  }, []);
  const search = async (e) => {
    const searchResult = await posts.filter((post) =>
      post.data.title.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setFiltered(searchResult);
    if (e.target.value === "") {
      setFiltered([]);
    }
  };
  return (
    <aside className="md:flex flex-col w-full  md:p-2 p-0 hidden">
      <h3 className="text-xl p-2">Search</h3>
      <input className="p-2 border-2 mb-2" onChange={search} />
      {filtered?.map((post, i) => (
        <PostComponent key={i} title={post.data.title} slug={post.slug} />
      ))}
    </aside>
  );
};

export default RecentPosts;
