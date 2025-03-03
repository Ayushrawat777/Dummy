import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
console.log(user);

  useEffect(() => {
    if (!userId) {
      navigate("/Dummy");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user data");
      }
    };

    fetchUser();
  }, [userId, navigate]);

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {user ? (
        <div className="profile-card">
          <img src={user.image} alt="User Avatar" className="avatar" />
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <button onClick={() => {
            localStorage.clear();
            navigate("/");
          }}>Logout</button>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
