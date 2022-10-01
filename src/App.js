import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/data').then(
      res => res.json()
    ).then(data => {
      console.log(data);
      setData(data.message);
    }).catch(
      err => setData('Cannot connect to the servers')
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
