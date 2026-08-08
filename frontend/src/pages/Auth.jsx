import { useState } from "react";
import "./Auth.css";
import { loginUser, registerUser } from "./api";


function Auth() {
  const [username, setUsername] = usestate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (!email.icludes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password do not match.");
      return;
    }
    console.log("New User Registered");
    console.log(username, email, password);

    alert("Account created successfully!");
  };
  const login = () => {
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }
    console.log (email, password);
    alert("Login successful!");
  };
  return (
    <div className="container" id="container">
        <div className="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input 
                  type="text" id="signInName" 
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                  type="email" 
                  id="signInemail"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                <input
                  type="password"
                  id="signInPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                <button type="button" onClick={signup}>Sign Up</button>
            </form>
        </div>

        <div className="form-container sign-in">
            <form>
                <h1>Sign In</h1>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                </div>
                <span>or use your email password to login.</span>
                <input type="email" id="loginEmail" placeholder="Email" />
                <input type="password" id="loginPassword" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button type="button" onClick={login}>Sign In</button>
            </form>
        </div>

        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="toggle-button" id="signIn">Sign In</button>
                </div>

                <div className="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details and start journey with us</p>
                    <button className="hidden" id="register">Sign Up</button>
                </div>
            </div>

            
        </div>


export default Auth;
