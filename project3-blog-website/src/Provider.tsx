import React, { createContext, useState } from "react";
import { PostType } from "./components/AddNewBlog";

const blogs = [
  {
    heading: "React js",
    subHeading: "Introduction",
    likes: 50,
    date: "Mar 14",
    writerInfo: "Anahit Vardevanyan in Octa Labs Insights",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVUnM-QqMQPiLRw8TyVTDp-KQbq08ji43VA&s",
  },
  {
    heading: "Design Patterns in React",
    subHeading: "Introduction",
    likes: 76,
    date: "Jun 14",
    writerInfo: "Kshitij Jung Shahi in React Js Docs",
    imageUrl:
      "https://refine-web.imgix.net/blog/2023-10-17-react-patterns/social-2.png?w=1788",
  },
];

type PostsContextType = {
  posts: PostType[];
  //   setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  handleAddNewPosts: (posts: PostType) => void;
  handleRemovePost: (heading: string) => void;
};

export const PostsContext = createContext<PostsContextType | undefined>(
  undefined
);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<PostType[]>(() => {
    const allPosts = localStorage.getItem("posts");
    return allPosts ? [...JSON.parse(allPosts)] : [...blogs];
  });

  //add new Posts
  const handleAddNewPosts = (newPost: PostType) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  //remover posts
  const handleRemovePost = (heading: string) => {
    const updatedPosts = posts.filter(
      (post) => post.heading.toLowerCase() !== heading.toLowerCase()
    );
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  return (
    <PostsContext.Provider
      value={{ posts, handleAddNewPosts, handleRemovePost }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default Provider;
