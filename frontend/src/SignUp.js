import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert('Account created. You can now sign in.');
    navigate('/signin');
  };
  return (
    <div className="signin-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>Email:</label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default SignUp;
