import { useState, useEffect } from "react";
import fetchCharacters from "../api/fetchCharacters";

const useCharacters = (initialPage = 1) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchCharacters(page);
      setCharacters(data);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  const handleNext = () => setPage(page + 1);
  const handlePrev = () => setPage(page - 1);

  return { characters, page, isLoading, handleNext, handlePrev };
};

export default useCharacters;