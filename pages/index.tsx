import { useEffect, useState } from "react";

import { Blogpost } from "./api/get-all-posts";
import Link from "next/link";
import type { NextPage } from "next";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
`;

const CenterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 600px;

  h1 {
    font-size: 3.5rem;
    font-weight: 200;
    letter-spacing: 1px;
  }
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 300;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 1.2rem;

  h2 {
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

const BlogPageLinks = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: 200;
`;

const skip = 10;

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Blogpost[]>([]);
  const [pages, setPages] = useState<number>();

  const fetchIt = async (pageNum: number) => {
    const { entries, total } = await (
      await fetch(`/api/get-all-posts?skip=${pageNum * skip}`)
    ).json();
    console.log(entries);
    setPosts(entries);

    const pages = Math.ceil(total / skip);

    setPages(pages);
  };

  useEffect(() => {
    // get pageNum from url query param
    fetchIt(1);
  }, []);

  return (
    <PageWrapper>
      <CenterCol>
        <h1>Blog</h1>

        <PostsWrapper>
          {!!posts.length &&
            posts.map((post) => (
              <Post key={post.title}>
                <h2>{post.title}</h2>
                <span>{post.published}</span>
                <p>{post.description}</p>
              </Post>
            ))}
        </PostsWrapper>

        <BlogPageLinks>
          {pages &&
            Array(pages)
              .fill(undefined)
              .map((_, idx) => (
                <Link href={`/blog/${idx}`} key={idx}>
                  <a>{idx + 1}</a>
                </Link>
              ))}
        </BlogPageLinks>
      </CenterCol>
    </PageWrapper>
  );
};

export default Home;
