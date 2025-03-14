import useFetch from "react-fetch-hook";
import React from 'react';
import { Rate } from 'antd';
//import { Tag } from 'antd';

const Review = (props) => {
    const {os} = props;
    const { data, isLoading, error } = useFetch('/data/reviews.json');
    // Show a loading message while data is fetching
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
  
    // Handle error
    if (error) {
      return <div className="error">Error: error fetching</div>;
    }

  return (
        <>
            {data[os].map((post) => (    
                <div key={post.text}   >       
                  <p>
                    <b>{post.name}</b> {post.date} <Rate disabled defaultValue={post.grade} /><br/>
                    <small>{post.device} {post.os} Версия приложения: {post.app}</small>
                  </p>
                  {/* <p><Rate disabled defaultValue={post.grade} /></p> */}
                  {/* {post.info ? <Tag color="processing">Предложение</Tag> : <></>} */}
                  
                  <p style={{"fontSize": "18px"}}>{post.text}</p>
                  <hr/>
                </div>
            ))}
        </>
    );
};

export default Review;