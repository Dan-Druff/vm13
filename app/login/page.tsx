'use client'

import { useState, FormEvent } from 'react';
import { firebaseLogin } from '@/firebase/firebaseOps';
import { useRouter } from 'next/navigation';
import GoogleIn from '../components/GoogleIn';
interface LoginFormProps {}

const LoginPage: React.FC<LoginFormProps> = () => {
    const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [error, setError] = useState<string>('');
   
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    

    try {
      setError('');
      const loginResult = await firebaseLogin(email,password);
      if(loginResult.status){
        console.log(`Success Logging In Up!`);
        setEmail('');
        setPassword('');
        router.push('/dashboard');
      }else{
        throw new Error(`Error Signing Up🚦`);
      }
      // Redirect to a different page or perform any other action upon successful signup
    } catch (e) {
      setError(`Failed to login, ${e}`);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleLogin}>
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
   
      
        <button type="submit">Login</button>
      </form>
      <GoogleIn></GoogleIn>
    </div>
  );
};

export default LoginPage;
