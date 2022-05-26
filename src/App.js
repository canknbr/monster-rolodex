import './App.css';
import { useState, useEffect } from 'react';
import MonsterList from './components/card-list/MonsterList';
import Search from './components/search-box/Search';
function App() {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredVal, setFilteredVal] = useState('');
  const getFetch = async () => {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setMonsters(data);
    setLoading(false);
  };
  useEffect(() => {
    getFetch();
  }, []);

  const newMonster = monsters.filter(monster => {
    return monster.name.toLowerCase().includes(filteredVal.toLowerCase());
  });
  if (loading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="App">
      <h1 className="title">Monster Search</h1>
      <Search
        className="monster-search-box"
        type="search"
        placeholder="search monster"
        setFilteredVal={setFilteredVal}
      />
      <MonsterList newMonster={newMonster} />
    </div>
  );
}

export default App;
