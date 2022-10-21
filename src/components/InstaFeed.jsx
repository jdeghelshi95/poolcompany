import React from "react";
import Feed from "instagram-feed-embed";
const InstaFeed = () => {
  return (
    <div>
      <div>
        {/* <h1>test</h1> */}
      </div>
      <div>
        <Feed
          userName="bairespoolplastering"
          limit={12}
          width={400}
          maxContainerHeight={500}
        />
      </div>
    </div>
  );
};

export default InstaFeed;
