import { useState } from "react";
import axios from "axios";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [profileData, setProfileData] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`https://lichess.org/api/user/${username}`);
      setProfileData(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <input
        type="text"
        placeholder="Enter Lichess username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchProfile}>Fetch Profile</button>
      {profileData && (
        <div>
          <h2>{profileData.username}</h2>
          <p>{profileData.bio || "No bio available"}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
