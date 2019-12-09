import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import Post from "../src/components/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import "../src/styles/home.scss";
import Icon from "../src/components/Icon";

const Home = ({ posts }) => (
  <div className="container">
    <div className="posts">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className="name">Çağatay Kapuağası</p>
      <p className="job">Computer Science</p>

      <div className="icons">
        <Icon size={70} type="twitter" />
        <Icon size={70} type="instagram" />
        <Icon size={70} type="linkedin" />
        <Icon size={70} type="facebook" />
      </div>

      {/* <InfiniteScroll
      //dataLength={items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={this.refresh}
      pullDownToRefresh
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
      }
    >
      {items}
    </InfiniteScroll> */}

      <div className="postContainer">
        {posts.map(post => (
          <Post post={post} />
        ))}
      </div>
    </div>
  </div>
);

//https://odullu-yarisma.herokuapp.com/api/posts
Home.getInitialProps = async ({ req }) => {
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
