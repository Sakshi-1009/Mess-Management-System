import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './Auth.css';

// --- Firebase Config ---
const firebaseConfig = {
  apiKey: "AIzaSyCP6Q0uWmB-4AKiVg9mANtZBZR1hmy05t8",
  authDomain: "messmanagement-edf37.firebaseapp.com",
  projectId: "messmanagement-edf37",
  storageBucket: "messmanagement-edf37.appspot.com", // fixed ".app" typo
  messagingSenderId: "1018199373277",
  appId: "1:1018199373277:web:1a009d5717c89e5d11f234",
  measurementId: "G-4EYGM0G7WY"
};

// --- Firebase Initialization ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const toggleMode = () => {
    setIsSignup(prev => !prev);
    setForm({ email: '', password: '', confirmPassword: '' });
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { email, password, confirmPassword } = form;

    if (isSignup && password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Signup successful!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          {isSignup && (
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          )}
          <button type="submit">{isSignup ? 'Create Account' : 'Login'}</button>
        </form>
        <p onClick={toggleMode} className="switch-link">
          {isSignup ? 'Already have an account? Login' : 'Don’t have an account? Sign up'}
        </p>
      </div>
    </div>
  );
}
