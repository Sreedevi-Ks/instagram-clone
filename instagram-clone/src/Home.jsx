import React from "react";
import "./Home.css";
import Post from "./Post";
import 'bootstrap-icons/font/bootstrap-icons.css';
import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import video3 from "./assets/video3.mp4";
import video4 from "./assets/video4.mp4";
import user1 from "./assets/user1.jpg";
import user2 from "./assets/user2.jpg";
import user3 from "./assets/user3.jpg";
import user4 from "./assets/user4.jpeg";
import user5 from "./assets/user5.jpg";
import user6 from "./assets/user6.jpg";
function Home(){
   const posts = [
    { id: 1, user: "mohanlal", video: video1, img: user1 },
    { id: 2, user: "Nivin", video: video2, img: user2 },
    { id: 3, user: "Prithviraj", video: video3, img: user3 },
    { id: 4, user: "Tovino", video: video4, img: user4 },
  ];
  const stories = [
  { id: 1, name: "Mohanlal", img: user1 },
  { id: 2, name: "Nivin", img: user2 },
  { id: 3, name: "Prithviraj", img: user3 },
  { id: 4, name: "Tovino", img: user4 },
  { id: 5, name: "Dileep", img: user5 },
  { id: 6, name: "Sreenivasan", img: user6 },

];

  return (
    <div className="home">

      <div className="sidebar">

  {/* TOP LOGO */}
  <div className="logo">
    <i className="bi bi-instagram"></i>
  </div>

  {/* MENU */}
  <div className="menu">

    <div className="item">
      <i className="bi bi-house"></i>
      <span>Home</span>
    </div>

    <div className="item">
      <i className="bi bi-search"></i>
      <span>Search</span>
    </div>

    <div className="item">
      <i className="bi bi-compass"></i>
      <span>Explore</span>
    </div>

    <div className="item">
      <i className="bi bi-play-circle"></i>
      <span>Reels</span>
    </div>

    <div className="item">
      <i className="bi bi-chat"></i>
      <span>Messages</span>
    </div>

    <div className="item">
      <i className="bi bi-heart"></i>
      <span>Notifications</span>
    </div>

    <div className="item">
      <i className="bi bi-plus-square"></i>
      <span>Create</span>
    </div>

    <div className="item">
      <i className="bi bi-person-circle"></i>
      <span>Profile</span>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="bottom">

    <div className="item">
      <i className="bi bi-list"></i>
      <span>More</span>
    </div>

    <div className="item">
      <i className="bi bi-grid"></i>
      <span>Also from meta</span>
    </div>

  </div>

</div>

      {/* CENTER FEED */}
      <div className="feed">
        <div className="feed-container">

          {/* STORIES */}
          <div className="stories">
            {stories.map(story => (
            <div className="story" key={story.id}>
            <img src={story.img} alt={story.name} />
            <p>{story.name}</p>
            </div>
            ))}
          </div>
         {posts.map(post => (
         <Post key={post.id} post={post} />
         ))} 
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right">
        <div className="profile-row">
        <img src={user3} />
        <span className="profile-name">prithviraj</span>
        <button className="switch-btn">Switch</button>
        </div>
          <div className="suggest-title">
    <span>Suggested for you</span>
    <button>See all</button>
  </div>

  <div className="suggest-row">
    <img src={user1} />
    <span className="username">Mohanlal</span>
    <button>Follow</button>
  </div>

  <div className="suggest-row">
    <img src={user2}/>
    <span className="username">Nivin</span>
    <button>Follow</button>
  </div> 
  <div className="footer">

  <p>
    About·Help·Press·API·Jobs·Privacy·Terms·<br/>Locations·Language·Meta Verified
  </p>

  <p className="copyright">
    © 2026 INSTAGRAM FROM META
  </p>

</div>
      </div>
      <div className="message-box">
        <i className="bi bi-chat"></i>
        <span>Messages</span>
        <div className="badge">3</div>
      </div>

    </div>
  );
}
export default Home;