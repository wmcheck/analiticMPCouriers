import useFetch from "react-fetch-hook";
import React from 'react';

const Releses = () => {
    const { data, isLoading, error } = useFetch('/data/metric.json');
    // Show a loading message while data is fetching
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
  
    // Handle error
    if (error) {
      return <div className="error">Error: error fetching</div>;
    }

  return <>
        <h1>Релизы JS</h1>
            {data.map((post) => (     
                <div key={post.version}>
          
                <p><b>{post.version}</b> {post.time} {post.comment}</p>
                </div>
            ))}
  </>;
};

export default Releses;