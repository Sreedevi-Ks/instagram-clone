import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import meta from "./assets/meta.png";
function Signup(){
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email !== "" && password !== "";

    return(
        <div className="signup-container">
            <div className="main-content">
            <div className="signup-box">
                <div className="top-bar">
                     <span 
                       className="back-arrow" 
                       onClick={() => navigate("/")} >❮</span>
                <img src={meta} alt="logo" className="meta-logo1"/>
            </div>
    
                <h1>Get started on Instagram</h1>
                <p className="subtitle">
                    Sign up to see photos and videos from your friends.
                </p>
                <h2>Mobile number or email</h2>
                <input type="text" placeholder="Mobile number or email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="information">
                    You may receive notifications from us. 
                <a href="https://help.instagram.com/574047304429005" className="contact">Learn why we ask for your contact information</a>
                </p>
                <h2>Password</h2>
                <input type="password" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)} />
                <h2>Birthday</h2>
                <div className="birthday">
                    <select>
                        <option>Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    <select>
                        <option>Day</option>
                        {[...Array(31)].map((_, i) => (
                          <option key={i+1}>{i + 1}</option>
                        ))}
                    </select>
                    <select>
                        <option>Year</option>
                        {[...Array(77)].map((_, i) => (
                        <option key={i}>{2026 - i}</option>
                        ))}
                    </select>
                </div>
                <h2>Name</h2>
                <input type="text" placeholder="Full name" />
                <h2>Username</h2>
                <input type="text" placeholder="Username"/>
                <p className="learn">
                    People who use our service may have uploaded your contact information to Instagram.
                    <a href="https://www.facebook.com/help/instagram/261704639352628" className="more">Learn more</a>
                </p>
                <p className="terms">
                    By tapping Submit,you agree to create an account and to Instagram's <a href="https://help.instagram.com/581066165581870" className="ter">Terms</a>,
                    <a href="https://privacycenter.instagram.com/policy" className="policy">Privacy Policy</a> and 
                    <a href="https://privacycenter.instagram.com/policies/cookies/" className="policies">Cookies Policy</a>.
                </p>
                <p className="improve">
                    The <a href="https://privacycenter.instagram.com/policy">Privacy Policy </a>

                    describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalize and improve our products, including ads.
                </p>

        <button className="submit-btn"disabled={!isValid} onClick={() => navigate("/Home")}>Submit</button>

        <button className="login-btn"onClick={() => navigate("/forgot")}>I already have an account</button>
        
        </div>
        </div>
        <div className="footer">
                <div className="footer-links">
                    <span>Meta</span>
                    <span>About</span>
                    <span>Blog</span>
                    <span>Jobs</span>
                    <span>Help</span>
                    <span>API</span>
                    <span>Privacy</span>
                    <span>Terms</span>
                    <span>Locations</span>
                    <span>Instagram Lite</span>
                    <span>Contact Uploading & Non-Users</span>
                    <span>Meta Verified</span>
                </div>

                <div className="footer-bottom">
                    <select>
                <option>English</option>
                <option>Malayalam</option>
                <option>Hindi</option>
                <option>Tamil</option>
                <option>Kannada</option>
                <option>Telugu</option>
                <option>German</option>
            </select>
                    <span>© 2026 Instagram from Meta</span>
                </div>
            </div>

            

        </div>
    )
}
export default Signup;