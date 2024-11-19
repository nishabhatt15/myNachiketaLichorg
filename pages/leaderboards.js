import { useEffect, useState } from "react";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState(null);

  useEffect(() => {
    // Fetch leaderboard data and set the state
    fetchLeaderboardData();
  }, []);

  
  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch("https://lichess.org/api/leaderboards");
      const data = await response.json();
      setLeaderboardData(data); // Ensure data is properly set
    } catch (error) {
      console.error("Error fetching leaderboard data", error);
    }
  };

  if (!leaderboardData) {
    return <div>Loading leaderboard...</div>;
  }

  return (
    <div>
      {leaderboardData.map((player, index) => (
        <div key={index}>{player.name}</div>
      ))}
    </div>
  );
}

export default Leaderboard;
