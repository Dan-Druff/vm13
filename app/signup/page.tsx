'use client'

import { useState, FormEvent } from 'react';
import { firebaseSignup } from '@/firebase/firebaseOps';
import { useRouter } from 'next/navigation';
import GoogleIn from '../components/GoogleIn';
interface SignupFormProps {}

const SignupPage: React.FC<SignupFormProps> = () => {
const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setError('');
      const signupResult = await firebaseSignup(email,password,username);
      if(signupResult.status){
        console.log(`Success Signing Up!`);
        router.push('/dashboard');
      }else{
        throw new Error(`Error Signing Up🚦`);
      }
      // Redirect to a different page or perform any other action upon successful signup
    } catch (error) {
      setError('Failed to sign up');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <GoogleIn></GoogleIn>
    </div>
  );
};

export default SignupPage;
