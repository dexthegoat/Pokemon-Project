import axios from 'axios';

export function getData(page) {
  return axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=3&offset=' + (page * 3).toString()
  );
}

export function searchData(searchTerm) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
}
