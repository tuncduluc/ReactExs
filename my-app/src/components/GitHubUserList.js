import React, { useState } from "react";
import GithubUser from "./GitHubUser";

const GitHubUserList = () => {
    const [usernames, setUsernames] = useState([]);
    const [newUsername, setNewUsername] = useState('');

    const handleUsernameChange = (event) => {
        setNewUsername(event.target.value);
    };

    const handleAddUsername = () => {
        if (newUsername) {
            setUsernames([...usernames, newUsername]);
            setNewUsername('');
        }
    };

    return (
        <div>
          <div>
            <input
              type="text"
              value={newUsername}
              onChange={handleUsernameChange}
              placeholder="Enter a GitHub username"
            />
            <button onClick={handleAddUsername}>Add</button>
          </div>
          <div>
            {usernames.map((username) => (
              <GithubUser key={username} username={username} />
            ))}
          </div>
        </div>
      );
}

export default GitHubUserList;
