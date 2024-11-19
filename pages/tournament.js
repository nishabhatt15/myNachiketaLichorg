import { useEffect, useState } from "react";
import axios from "axios";

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await axios.get("https://lichess.org/api/tournament");
        setTournaments(response.data || []);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      }
    };

    fetchTournaments();
  }, []);

  return (
    <div>
      <h1>Tournaments</h1>
      <ul>
        {tournaments.map((tournament) => (
          <li key={tournament.id}>
            {tournament.name} - {tournament.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tournaments;
