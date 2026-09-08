import {useEffect, useState} from "react";

const FetchData = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, []); // empty array = sirf mount pe ek baar chalega
  return (
    <div>
      <h1>First Post Title: </h1>
      {posts.length > 0 ? <h2>{posts[0].title}</h2> : <p>Loading...</p>}
    </div>
  );
};

export default FetchData;
