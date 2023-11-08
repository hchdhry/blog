import { useState,useEffect } from "react";

const Post = ()=>{
    const [posts,setPosts] = useState([]);
   
    async function getPosts() {
        try {
          const response = await fetch("http://localhost:3000/post");
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      }

   useEffect(()=>{getPosts()},[])
   return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.Text}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );

}
export default Post