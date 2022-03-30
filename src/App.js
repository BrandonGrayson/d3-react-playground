import './App.css';
import { useState } from 'react';

const width = 960
const height = 500

const csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv'

function App() {
  const [data, setData] = useState(null)

  return (
    <div className="App">
      <h1>D3 Playground</h1>
    </div>
  );
}

export default App;
