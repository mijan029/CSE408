import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  
  // State hooks for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // Effect hook to initialize form with current user data
  useEffect(() => {
    if(user && user.user) {
      setName(user.user.name || '');
      setEmail(user.user.email || '');
      setPhone(user.user.phone || '');
      setAddress(user.user.address || '');
    }
  }, [user]); // Depend on user to re-run when it changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Corrected the template string usage for dynamic URL
      const response = await axios.put(`/user/profile/edit/${user.user._id}`, {
        name,
        email,
        phone,
        address
      });
      user.user.name = name;
      user.user.email = email;
      user.user.phone = phone;
      user.user.address = address;
      navigate('/profile');
      //alert('Profile updated successfully!');
      // Update UI or redirect as needed here
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('Failed to update profile.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <input type="text" name="phone" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
      </div>
      <div>   
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input type="text" name="address" id="address" value={address} onChange={e => setAddress(e.target.value)} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
      </div>
      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update Profile</button>
    </form>
  );
};

export default EditProfile;
