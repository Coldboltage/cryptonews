import React, { useState, createContext, useCallback } from "react";

const ContextAPI = createContext();

const Context = ({ children }) => {
  const [query, setQuery] = useState("btn"); // Extracted from params
  const [stories, setStories] = useState([]);
  const [baseURL, setBaseURL] = useState(
    "https://cryptopanic.com/api/v1/posts/"
  );
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_API_KEY);

  const getPostsByQuery = useCallback(
    async (coin) => {
      console.log("calling");
      const url = `${baseURL}?auth_token=${apiKey}&currenies=${coin}&public=true`;
      // let url = "https://jsonplaceholder.typicode.com/todos/1"
      const response = await fetch(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        responseType: "json",
      });
      const data = await response.json();
      setStories(data.results);
    },
    [apiKey, baseURL]
  );

  return (
    <ContextAPI.Provider
      value={{ query, baseURL, apiKey, setQuery, getPostsByQuery, stories }}
    >
      {children}
    </ContextAPI.Provider>
  );
};

export default Context;

export { ContextAPI };
