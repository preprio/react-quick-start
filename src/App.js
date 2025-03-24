import React from "react";
import {GetPosts} from "./queries/get-posts";
import {useQuery} from "@apollo/client";
import {Link} from "react-router-dom";
function App() {
  const {loading, error, data} = useQuery(GetPosts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const posts = data.Posts.items;

  return (
    <div>
      <h1>My blog site</h1>
      <ul>
        {posts.map((post) => (

          //List the fetched posts
          <li key={post._id}>
            <Link to={post._slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
