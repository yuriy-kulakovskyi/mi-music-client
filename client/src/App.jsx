import { React, useState, useEffect } from 'react';
import './App.css';
import Post from './components/Post/Post';
import Songs from './components/Songs/Songs';

const App = () => {
  const [songsList, setSongsList] = useState([]);
  const [page, setPage] = useState("songs");

  useEffect(() => {
    switch (page) {
      case 'post' :
        document.querySelector(".App__post-song").style.display = 'flex';
        document.querySelector(".App__songs").style.display = 'none';
        break;
  
      case 'songs':
        document.querySelector(".App__post-song").style.display = 'none';
        document.querySelector(".App__songs").style.display = 'flex';
        break;
  
      default:
        document.querySelector(".App__post-song").style.display = 'none';
        document.querySelector(".App__songs").style.display = 'flex';
    }
  })

  return (
    <div className="App">
      <Post 
        setSongsList={setSongsList} 
        page={page} 
        setPage={setPage}
      />

      <Songs 
        songsList = {songsList} 
        page={page} 
        setPage={setPage}
      />
    </div>
  );
}

export default App;
