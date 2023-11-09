import { useState, useEffect } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const user = localStorage.getItem("token");

  const deletePost = async (postId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("User not authenticated");
        return;
      }

      const req = await fetch(`http://localhost:3000/post/${postId}`, {
        method: "DELETE",
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (req.ok) {
        console.log("Post deleted successfully");
        // Refresh the posts after deleting
        getPosts();
      } else {
        console.error("Error deleting post");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  async function getPosts() {
    try {
      const response = await fetch("http://localhost:3000/post");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          {user && (
            <button onClick={() => deletePost(post._id)}>Delete</button>
          )}
          <h2>{post.title}</h2>
          <p>{post.Text}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
