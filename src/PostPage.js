import React from "react";
import {useQuery} from "@apollo/client";
import {GetPostBySlug} from "./queries/get-post-by-slug";
import {useParams} from "react-router-dom";

export default function PostPage() {
  const {slug} = useParams();
  const {loading, error, data} = useQuery(GetPostBySlug, {
    variables: {slug}
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const post = data.Post;

  return (
      <>
        <h1>
          {post.title}
        </h1>

        <div className="my-10">
          <img
              src={post.cover.url}
              alt={post.title}
          />
        </div>

        {/* Loop through content types in article content */}

        {post.content.map((contentType) => {

          //Display image if it exists
          if (contentType.__typename === 'Assets' && contentType.items.length) {
            return (
                <div className="my-10">
                  <img
                      src={contentType.items[0]?.url}
                      alt={post.title}
                  />
                </div>
            );
          }

          //Display text as HTML
          if (contentType.__typename === 'Text') {
            return (
                <div key={contentType.body} dangerouslySetInnerHTML={{__html: contentType.body}}></div>
            );
          }

          return null;
        })}
      </>
  )
}
