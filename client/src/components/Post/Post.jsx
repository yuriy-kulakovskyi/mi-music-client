import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Post.css';

const Post = props => {

  const [name, setSongName] = useState('');
  const [url, setUrl] = useState('');


  useEffect(() => {
    Axios.get("https://mi-music.herokuapp.com/read")
    .then(response => {
      props.setSongsList(response.data)
    });
  })

  const addToList = () => {
    Axios.post('https://mi-music.herokuapp.com/insert', {
      name: name,
      url: url
    });
    document.location.reload();
  }

  return (
    <div className='App__post-song'>
      <h1 className="App__post-song__title">MI Music</h1>

      <label>Song Name:</label>
      <input type="text" onChange={(event) => {
        setSongName(event.target.value);
      }} />
      <label>URL (mp3):</label>
      <input type="text" onChange={(event) => {
        setUrl(event.target.value);
      }}/>
      <button onClick={addToList} className="App__post-song__addBtn">Add To List</button>

    </div>
  );
}

export default Post;
