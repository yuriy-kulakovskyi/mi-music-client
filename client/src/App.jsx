import { React, useState } from 'react';
import './App.css';
import Post from './components/Post/Post';
import Songs from './components/Songs/Songs';

const App = () => {
  const [songsList, setSongsList] = useState([]);

  return (
    <div className="App">
      <Post setSongsList={setSongsList}/>
      <Songs songsList = {songsList} />
    </div>
  );
}

export default App;
