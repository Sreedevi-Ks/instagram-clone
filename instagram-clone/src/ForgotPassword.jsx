import React from "react";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
function ForgotPassword() {
  const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="forgot-page">
      <div className="form-box">
       <button onClick={() => navigate(-1)} className="back-btn">❮</button>
      <h2>Find your account</h2>
      <p>
        Enter your mobile number, username or email.
      <a href="https://help.instagram.com/374546259294234"> Can't reset your password?</a>
      </p>

      <input type="text" placeholder="Mobile number, username or email" />

      <p className="note">
        You may receive WhatsApp and SMS notifications from us for security and login purposes.
      </p>

      <button className="continue-btn" onClick={() => setShowPopup(true)}>Continue</button>
      {showPopup && (
  <div className="popup">
    <div className="popup-box">
      
      <h3>SMS sent</h3>

      <p>
        We sent a message with a link to get back into your account.
      </p>

      <button onClick={() => setShowPopup(false)}>
        OK
      </button>

    </div>
  </div>
)}
    </div>
    <div className="footer1">
            <p className="label1">
                Meta  About  Blog  Jobs  Help  API  Privacy  Terms  Locations  InstagramLite  ContactUploading&Non-Users MetaVerified   
            </p>
            <div className="drop-box1">
            <select>
                <option>English</option>
                <option>Malayalam</option>
                <option>Hindi</option>
                <option>Tamil</option>
                <option>Kannada</option>
                <option>Telugu</option>
                <option>German</option>
            </select>
            <p className="copy1">© 2026 Instagram from Meta</p>
            </div>
        </div>
    </div>
  );
}

export default ForgotPassword;