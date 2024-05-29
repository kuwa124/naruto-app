import axios from "axios";

const limit = 15;

const fetchCharacters = async (page) => {
  const apiUrl = "https://narutodb.xyz/api/character";
  const result = await axios.get(apiUrl, { params: { page, limit } });
  return result.data.characters;
};

export default fetchCharacters;