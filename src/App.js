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


function Librarytwo() {
  const [myMixes, setMyMixes] = useState([]);
  async function getMixes() {
    let { data: Mixes, error } = await supabase
      .from('Mixes')
      .select('*');
    setMyMixes(Mixes);
  }
  getMixes();
  return (
    <table>
    {
      myMixes.map(m => (
        <tr>
          <td>{m.title}</td>
          <td>{m.artist}</td>
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
        <img src="lazersharkprofilepic.jpg" className="App-logo" alt="logo" />
        <p>
          Matt's Music Ground
        </p>
        <a
          className="App-link"
          href="https://scontent.fdet1-2.fna.fbcdn.net/v/t39.30808-6/404963199_713944270825735_1129650481302484129_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_SxNo0agiB4Ab4pOBLu&_nc_oc=AdjaHsm01s8fgMOIYCqWy8Poa3I9grSgAnntVrdXwbkAgSkkk5iqC35wwU35aL2d0DU&_nc_ht=scontent.fdet1-2.fna&oh=00_AfBH2oRJTc3AxVEtV2w7u0_iUsxNDXoN0sodBSmV46rEQw&oe=6633255A"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Songs</h1>

          <Library />

         <h1>Mixes</h1>
          <Librarytwo />

        </a>
      </header>
    </div>
  );
}

export default App;
