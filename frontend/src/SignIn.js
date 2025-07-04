import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
function SignIn() {
  const [email, setEmail] = useState('');
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
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input type="password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
export default SignIn;
