import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext';

const ProfilePage = () => {
    const { user } = useAuthContext();
    //if(!user) return null;

    const navigate = useNavigate();
    const handleEdit = async(e) => {
        e.preventDefault();
        navigate('/profile/edit');
    }
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <AuthContextProvider>
            <div className="p-8">
                <div className="tracking-wide text-sm text-indigo-500 font-semibold">Name</div>
                <p className="text-lg font-medium text-black mb-2">{ user.user.name }</p>

                <div className="tracking-wide text-sm text-indigo-500 font-semibold">Email</div>
                <p className="text-lg font-medium text-black mb-2">{ user.user.email }</p>

                <div className="tracking-wide text-sm text-indigo-500 font-semibold">Phone</div>   
                <p className="text-lg font-medium text-black mb-2">{ user.user.phone }</p>

                <div className="tracking-wide text-sm text-indigo-500 font-semibold">Address</div>  
                <p className="text-lg font-medium text-black mb-4">{ user.user.address }</p>    

                <div className="tracking-wide text-sm text-indigo-500 font-semibold">Branch ID</div>
                <p className="text-lg font-medium text-black mb-4">{ user.user.branch_id }</p>             

                <div className="tracking-wide text-sm text-indigo-500 font-semibold">Post</div>
                <p className="text-lg font-medium text-black mb-4">{ user.user.post }</p>

                <button onClick = { handleEdit }
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Edit
                </button>
            </div>
            </AuthContextProvider>
        </div>
    );

};

export default ProfilePage;