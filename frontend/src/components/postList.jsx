import { useEffect, useState } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");

        useEffect(() => {
            const fetchPosts = async () => {
                  try {
                          const response = await fetch("http://localhost:3000/api/posts");

                                  if (!response.ok) {
                                            throw new Error("Failed to fetch posts");
                                                    }

                                                            const data = await response.json();
                                                                    setPosts(data);
                                                                          } catch (error) {
                                                                                  setError(error.message);
                                                                                        } finally {
                                                                                                setLoading(false);
                                                                                                      }
                                                                                                          };

                                                                                                              fetchPosts();
                                                                                                                }, []);

                                                                                                                  if (loading) return <p>Loading posts...</p>;

                                                                                                                    if (error) return <p>{error}</p>;

                                                                                                                      return (
                                                                                                                          <section>
                                                                                                                                <h2>Community Posts</h2>

                                                                                                                                      {posts.length === 0 ? (
                                                                                                                                              <p>No posts available yet.</p>
                                                                                                                                                    ) : (
                                                                                                                                                            posts.map((post) => (
                                                                                                                                                                      <article key={post._id}>
                                                                                                                                                                                  <h3>{post.title}</h3>
                                                                                                                                                                                              <p>{post.content}</p>
                                                                                                                                                                                                          <p>Posted by: {post.authorName}</p>

                                                                                                                                                                                                                      <small>
                                                                                                                                                                                                                                    {new Date(post.createdAt).toLocaleString()}
                                                                                                                                                                                                                                                </small>
                                                                                                                                                                                                                                                          </article>
                                                                                                                                                                                                                                                                  ))
                                                                                                                                                                                                                                                                        )}
                                                                                                                                                                                                                                                                            </section>
                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                              export default PostList;