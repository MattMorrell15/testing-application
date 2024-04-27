import { useState } from 'react';
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';


function Library() {
  const [mySongs, setMySongs] = useState([]);
  async function getSongs() {
    let { data: Songs, error } = await supabase
      .from('Songs')
      .select('*');
    setMySongs(Songs);
  }
  getSongs();
  return (
    <table>
    {
      mySongs.map(s => (
        <tr>
          <td>{s.title}</td>
          <td>{s.artist}</td>
        </tr>
      ))
    }
    </table>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Matt
          <Library />
        </a>
      </header>
    </div>
  );
}

export default App;
