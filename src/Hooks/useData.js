import { useEffect, useState } from "react";
import axios from "axios";

const useData = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/gamedata.json") 
      .then(res => setGames(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []); 

  return { games, loading, setLoading, error };
};

export default useData;
