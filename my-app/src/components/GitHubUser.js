import React, { useState, useEffect } from 'react';

const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching GitHub user data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { login, name, avatar_url, bio } = userData;

  return (
    <div>
      <h2>{login}</h2>
      {name && <p>Name: {name}</p>}
      {avatar_url && <img src={avatar_url} alt={`${login}'s avatar`} />}
      {bio && <p>Bio: {bio}</p>}
    </div>
  );
};

export default GithubUser;
