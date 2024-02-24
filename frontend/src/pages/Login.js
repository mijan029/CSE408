import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { useAuth } from '../context/AuthContext';
import  { useAuthContext } from '../hooks/useAuthContext';
import { useLogin} from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  //const { login } = useAuth();
  const { login, error, isLoading }= useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="p-10 bg-white rounded flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border-2 border-gray-300 rounded-md  p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full border-2 border-gray-300 rounded-md  p-2"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Log In
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
