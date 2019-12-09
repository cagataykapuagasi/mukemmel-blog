import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import "../styles/post.scss";

export default class Post extends Component {
  state = {
    height: 0
  };

  componentDidMount() {
    const height = this.blog.clientHeight;
    this.setState({ height });
  }

  onClick = () => {
    const { post } = this.props;

    window.open(post.slug);
  };

  render() {
    const { post } = this.props;
    const { height } = this.state;

    if (height > 300) {
      return (
        <div onClick={this.onClick} className="blog">
          <div className="blog-title-date">
            <a className="blog-title-link">{post.title}</a>

            <div className="blog-date-2">{post.date}</div>
          </div>

          <ReactMarkdown source={post.details} />

          <div className="blog-continue">Devamını oku</div>
        </div>
      );
    }

    return (
      <div
        ref={blog => {
          this.blog = blog;
        }}
        className="blog"
      >
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a>{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date">{post.date}</div>
      </div>
    );
  }
}
