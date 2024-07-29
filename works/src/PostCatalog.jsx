import React from "react";

class PostCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
    this.fetchPosts();
  }

  async fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const filteredData = data.map(({ id, title, body }) => {
      return { id, title, body };
    });

    this.setState({ articles: filteredData });
  }

  render() {
    const li = this.state.articles.map(({ id, title, body }) => {
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
  }
}

export default PostCatalog;