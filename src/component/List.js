import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextAPI } from "./Context";

const List = () => {
  const { setQuery, getPostsByQuery, stories } = useContext(ContextAPI);
  let { coin } = useParams();
  coin = coin || "ETH";

  useEffect(() => {
    setQuery(coin);
    getPostsByQuery(coin);
  }, [coin, getPostsByQuery, setQuery]);

  console.log(stories);

  return (
    <div>
      <ul>
        {stories && (
          <>
            <h1>Good stuff</h1>
            {stories.map((story, index) => {
              return (
                <li key={story.id}>
                  <a href={story.url}>{story.title}</a>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default List;
