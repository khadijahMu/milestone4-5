import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/checkout';
  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeToken = 'logged-in';
    localStorage.setItem('authToken', fakeToken);
    navigate(from, { replace: true });
  };
  return (
    <div className="signin-page">
      <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <h2>Greetings</h2>
        <p>Welcome to Luxury Gift Shop</p>
      </div>
      <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          placeholder='Enter your email address'
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          placeholder='Enter your email password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        {isSignIn ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button
          onClick={() => setIsSignIn(!isSignIn)}
          style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
        >
          {isSignIn ? 'Sign Up' : 'Sign In'}
        </button>
      </p>
    </div>
  );
}
export default SignIn;
