import React, { useState, useEffect } from "react";

const PostCatalog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      // console.log(data);
      const filteredData = data.map(({ id, title, body }) => {
        return { id, title, body };
      });

      setArticles(filteredData);
    };

    fetchPosts();
  }, []);

  console.log(articles);

  const li = articles.map(({ id, title, body }) => {
    return (
      <li className="posts_single-post" data-post-id={id} key={id + title}>
        <h3 className="posts__post-title">{title}</h3>
        <p className="posts__post-description">{body}</p>
      </li>
    );
  });

  return (
    <div className="posts">
      <ul className="posts__list">{li}</ul>
    </div>
  );
};

export default PostCatalog;