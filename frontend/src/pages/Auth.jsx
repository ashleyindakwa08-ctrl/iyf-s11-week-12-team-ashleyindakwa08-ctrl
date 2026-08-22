import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { useAuth } from "../context/AuthContext";

import {registerUser,loginUser} from "../api.js";


function Auth() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const signup = async () => {
    setError("");

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    try {
      await registerUser({ username, email, password });
      navigate("/");
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const login_ = async () => {
    setError("");

    if (!loginEmail || !loginPassword) {
      setError("Please enter your email and password.");
      return;
    }

    setIsSubmitting(true);
    try {
      await loginUser({ email: loginEmail, password: loginPassword });
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={(e) => e.preventDefault()}>
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
            type="text"
            id="signInName"
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
          <input
            type="password"
            id="signInConfirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {isActive && error && <p className="auth-error">{error}</p>}

          <button type="button" onClick={signup} disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Sign Up"}
          </button>

          <p className="mobile-switch">
            Already have an account?{" "}
            <a onClick={() => { setIsActive(false); setError(""); }}>Sign in</a>
          </p>
        </form>
      </div>

      <div className="form-container sign-in">
        <form onSubmit={(e) => e.preventDefault()}>
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
          <input
            type="email"
            id="loginEmail"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            id="loginPassword"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <a href="#">Forgot your password?</a>

          {!isActive && error && <p className="auth-error">{error}</p>}

          <button type="button" onClick={login_} disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>

          <p className="mobile-switch">
            Don&apos;t have an account?{" "}
            <a onClick={() => { setIsActive(true); setError(""); }}>Sign up</a>
          </p>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button
              className="toggle-button"
              id="signIn"
              onClick={() => { setIsActive(false); setError(""); }}
            >
              Sign In
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details and start journey with us</p>
            <button
              className="hidden"
              id="register"
              onClick={() => { setIsActive(true); setError(""); }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
