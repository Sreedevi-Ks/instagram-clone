import React, { useState } from "react";

function Post({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="post">

      <div className="post-header">
        <img src={post.img} alt="user" className="post-user-img" />
        <span className="post-username">{post.user}</span>
        </div>

      <div className="video-container">
        <video
          src={post.video}
          className="post-video"
          autoPlay
          muted
        loop
         playsInline
        />
      </div>

      <div className="post-icons">
        <div>

          <i
            className={`bi ${liked ? "bi-heart-fill liked" : "bi-heart"}`}
            onClick={() => setLiked(!liked)}
          ></i>

          <i className="bi bi-chat"></i>
          <i className="bi bi-send"></i>
        </div>

        <i className="bi bi-bookmark"></i>
      </div>

      <div className="post-caption">
        <b>{post.user}</b> Nice video 🔥
      </div>

    </div>
  );
}

export default Post;