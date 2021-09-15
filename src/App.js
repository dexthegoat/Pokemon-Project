import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getData, searchData } from '../src/api/api';
import './App.css';
import Cards from './components/Cards/Cards';
import PaginationCom from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getData(pageNumber);
      Promise.all(
        data.results.map(async item => {
          const { data } = await axios(item.url);
          return {
            name: item.name,
            id: data.id,
            src: data.sprites.other['dream_world']['front_default'],
          };
        })
      ).then(data => {
        // array of objects
        setPokemon(data);
      });
    }
    fetchData();
  }, [pageNumber]);

  useEffect(() => {
    if (searchTerm) {
      async function helper() {
        const { data } = await searchData(searchTerm);
        setPokemon([
          {
            name: data.species.name,
            id: data.id,
            src: data.sprites.other['dream_world']['front_default'],
          },
        ]);
      }
      helper();
    } else {
      // search term null
      async function fetchData() {
        const { data } = await getData(pageNumber);
        Promise.all(
          data.results.map(async item => {
            const { data } = await axios(item.url);
            return {
              name: item.name,
              id: data.id,
              src: data.sprites.other['dream_world']['front_default'],
            };
          })
        ).then(data => {
          setPokemon(data);
        });
      }
      fetchData();
    }
  }, [searchTerm]);

  const handlePage = flag => {
    if (flag) {
      setPageNumber(pageNumber + 1);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="Container">
      <header>
        <h2>Pokemon Search</h2>
      </header>
      <Search searchHandler={setSearchTerm} />
      <br />
      <Cards pokemons={pokemon} />
      <PaginationCom thing={[pageNumber, handlePage, Math.floor(1118 / 3)]} />
    </div>
  );
}

export default App;
