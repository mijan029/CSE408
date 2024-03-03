import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [branchId, setBranchId] = useState('');
  const [post, setPost] = useState('');
  const navigate = useNavigate();
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, branchId, post);
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="p-10 bg-white rounded flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <input
          type="text"
          placeholder="Branch ID"
          value={branchId}
          onChange={(e) => setBranchId(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        
        <input
          type="text"
          placeholder="Post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create
        </button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
