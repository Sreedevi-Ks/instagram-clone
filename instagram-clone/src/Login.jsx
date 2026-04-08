import React, {useState} from "react";
import "./Login.css";
import logo from "./assets/logo.png";
import img1 from "./assets/img1.png";
import meta from "./assets/meta.png";
import facebook from "./assets/facebook.png";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
    return(
    <div className="login-main">
        <div className="mobile-header">
        <img src={logo} alt="logo" />
    </div>
        <div className="login-container">
            <div className="login-left">
                <div className="logo-box">
                    <img src={logo} alt="logo" className="logo" />

                </div>
                <p>
                    See everyday moments from <br/>your <span>close friends</span>.
                </p>
        
                    <img src={img1} alt="img1" className="img1"/>


            </div>
        <div className="login-right">
            <div className="top-bar">
            <button className="right-btn">❮</button>
            <h3>Log in to instagram</h3>
            </div>
            <input type="text" placeholder="Mobile number, username or email" value={username}
            onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <button 
              className={`login-btn ${username && password ? "active" : ""}`}
              disabled={!username || !password}
              onClick={() => {
              if (username && password) {
              navigate("/Home");
              }
            }}
            >Log in</button>
            <p className="forgot">
               <Link to="/forgot"> Forgot password?</Link>
            </p>
            <button className="fb-btn" onClick={() => window.open("https://www.facebook.com", "_blank")}>
                <img src={facebook} alt="fb" className="fb-icon" />
                Log in with Facebook</button>
            <button className="signup-btn" onClick={()=>navigate("/Signup")}>Create new account</button>
            <div className="meta-box">
                <img src={meta} alt="logo" className="meta-logo"/>
            </div>

        </div>
        </div>
        <div className="login-footer">
            <p className="label">
                Meta  About  Blog  Jobs  Help  API  Privacy  Terms  Locations  InstagramLite  MetaAI  Threads  ContactUploading&Non-Users Meta Verified   
            </p>
            <div className="drop-box">
            <select>
                <option>English</option>
                <option>Malayalam</option>
                <option>Hindi</option>
                <option>Tamil</option>
                <option>Kannada</option>
                <option>Telugu</option>
                <option>German</option>
            </select>
            <p className="copy">© 2026 Instagram from Meta</p>
            </div>
        </div>
        </div>
    );
}
export default Login;