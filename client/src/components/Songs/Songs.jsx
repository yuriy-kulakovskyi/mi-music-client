import React, { useRef, useEffect, useState } from 'react';
import './Songs.css';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import vinyl from './img/vinyl.webp';

const Songs = props => {

  const addSong = useRef('');
  const songControls = useRef('');
  const vinylImg = useRef('');

  const [audio, setAudio] = useState('');
  const [songName, setSongName] = useState('');
  const [duration, setDuration] = useState('');

  let pageSongs = document.querySelectorAll("audio");
  let songs = [];

  for (let i = 0; i < pageSongs.length - 1; i++) {
    songs.push(pageSongs[i].getAttribute("src"));
  }

  const switchSection = () => {
    props.setPage("post");
  }

  let playing = false;

  const playSong = event => {
    const pageSongsNames = document.querySelectorAll(".songName");

    if (event.target.classList.value === 'songName') {
      if (!playing) {
        pageSongsNames.forEach(item => item.style.color = '#000');
        event.target.style.color = '#C850C0';
        setAudio(event.target.nextSibling.src);
        setSongName(event.target.innerText);
        setTimeout(() => document.querySelector('.mainAudio').play(), 200);
        playing = true;
        vinylImg.current.style.animation = 'spin 2s linear infinite';

        songControls.current.style.display = 'flex';
      
        if (playing) {
          document.querySelector(".play").style.display = 'none';
          document.querySelector(".pause").style.display = 'block';
        } else {
          document.querySelector(".play").style.display = 'block';
          document.querySelector(".pause").style.display = 'none';
        }
      }
    } else {
      if (!playing) {
        pageSongsNames.forEach(item => item.style.color = '#000');
        event.target.firstChild.firstChild.style.color = '#C850C0';
        setSongName(event.target.firstChild.firstChild.innerText);
        setAudio(event.target.firstChild.lastChild.src);
        setTimeout(() => document.querySelector('.mainAudio').play(), 200);
        playing = true;
        vinylImg.current.style.animation = 'spin 2s linear infinite';

        songControls.current.style.display = 'flex';
      
        if (playing) {
          document.querySelector(".play").style.display = 'none';
          document.querySelector(".pause").style.display = 'block';
        } else {
          document.querySelector(".play").style.display = 'block';
          document.querySelector(".pause").style.display = 'none';
        }
      }
    }
  };

  const playAudio = event => {
    event.nativeEvent.path[2].children[1].style.display = 'none';
    event.nativeEvent.path[2].children[2].style.display = 'block';
    setTimeout(() => document.querySelector('.mainAudio').play(), 200);
    vinylImg.current.style.animation = 'spin 2s linear infinite';
  }

  const pauseAudio = event => {
    event.nativeEvent.path[1].children[1].style.display = 'block';
    event.nativeEvent.path[1].children[2].style.display = 'none';
    setTimeout(() => document.querySelector('.mainAudio').pause(), 200);
    vinylImg.current.style.animation = 'none';
  }

  const nextSong = event => {
    event.nativeEvent.path[2].children[1].children[1].style.display = 'block';
    event.nativeEvent.path[2].children[1].children[2].style.display = 'none';
    document.querySelector('.mainAudio').pause();
    vinylImg.current.style.animation = 'none';

    for (let i = 0; i < songs.length; i++) {
      for (let j = 0; j < songs.length - 1; j++) {
        if (songs[j] === document.querySelector('.mainAudio').getAttribute("src")) {
          setTimeout(() => document.querySelector('.mainAudio').setAttribute("src", songs[j + 1]), 200);
          setSongName(props.songsList[j + 1].name);
        }
      }
    }
  }

  useEffect(() => {
    tippy(addSong.current, {
      content: "Add new song"
    });

    if (audio === '' || audio === null || audio === undefined) {
      songControls.current.style.display = 'none';
    } else {
      setTimeout(() => setInterval(() => setDuration(207 - (207 * document.querySelector(".mainAudio").currentTime) / document.querySelector(".mainAudio").duration), 200), 200);
    }
  }, [audio]);

  return (
    <div className='App__songs'>
      <div className="App__songs__header">
        <svg className="App__songs__header__addSongBtn" onClick={switchSection} ref={addSong} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 52 52" width="60px" height="60px">
          <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2  s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2  S39.604,28,38.5,28z" />
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
        </svg>
        <div className="App__songs__header__buttons-list">
          <div className="App__songs__header__buttons-list__button favourites">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="heart-15" width="30px" height="30px" viewBox="0 0 15 15">
              <path d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#10;&#9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z" />
            </svg>
            <h4 className="App__songs__header__buttons-list__button__title">Favourites</h4>
          </div>
          <div className="App__songs__header__buttons-list__button playlists">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="36px" viewBox="0 0 12 18" version="1.1">
              <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Rounded" transform="translate(-786.000000, -2859.000000)">
                  <g id="Image" transform="translate(100.000000, 2626.000000)">
                    <g id="-Round-/-Image-/-music_note" transform="translate(680.000000, 230.000000)">
                      <g>
                        <polygon id="Path" points="0 0 24 0 24 24 0 24" />
                        <path d="M12,5 L12,13.55 C11.06,13.01 9.9,12.8 8.67,13.23 C7.33,13.71 6.3,14.9 6.06,16.3 C5.6,19.04 7.92,21.38 10.65,20.95 C12.61,20.64 14,18.84 14,16.85 L14,7 L16,7 C17.1,7 18,6.1 18,5 C18,3.9 17.1,3 16,3 L14,3 C12.9,3 12,3.9 12,5 Z" id="🔹-Icon-Color" fill="#1D1D1D" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <h4 className="App__songs__header__buttons-list__button__title">Playlists</h4>
          </div>
          <div className="App__songs__header__buttons-list__button recent">
            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path d="M15,11H13V7a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1h3a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" /></svg>
            <h4 className="App__songs__header__buttons-list__button__title">Recent</h4>
          </div>
        </div>
      </div>
      <div className="App__songs__list">
        {props.songsList.map((val, key) => {
          return (
            <div key={key} onClick={playSong} className="App__songs__list__song">
              <div className="App__songs__list__song__left">
                <p className='songName'>{val.name}</p>
                <audio className='audio' src={val.url}></audio>
              </div>
              <div className="App__songs__list__song__right">
                <div className="App__songs__list__song__right__dots">
                  <p className="App__songs__list__song__right__dots__dot">.</p>
                  <p className="App__songs__list__song__right__dots__dot">.</p>
                  <p className="App__songs__list__song__right__dots__dot">.</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="App__songs__audio-wrapper" ref={songControls}>
        <div className="App__songs__audio-wrapper__song-info">
          <div className="App__songs__audio-wrapper__song-info__circle">
            <img src={vinyl} alt="Vinyl" ref={vinylImg} />
          </div>
          <h2 className="App__songs__audio-wrapper__song-info__song-title">{songName}</h2>
        </div>
        <div className="App__songs__audio-wrapper__controls">
          <audio className='App__songs__audio-wrapper__controls__player mainAudio' style={{ display: 'none' }} src={audio} controls></audio>
          <div className="App__songs__audio-wrapper__controls__play-button">
            <svg className="circle">
              <circle cx="50%" cy="50%" r="33"></circle>
              <circle cx="50%" cy="50%" r="33" strokeDasharray={207} strokeDashoffset={duration}></circle>
            </svg>
            <svg className='play-icon play' onClick={playAudio} xmlns="http://www.w3.org/2000/svg" fill='#333' width="40px" height="40px" viewBox="0 0 512 512"><path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={pauseAudio} className='play-icon pause' version="1.1" id="Capa_1" fill='#333' width="30px" height="30px" viewBox="0 0 47.607 47.607">
              <g>
                <path d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0   l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z" />
                <path d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631   C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z" />
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
            </svg>
          </div>
          <div className="App__songs__audio-wrapper__controls__next-button">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={nextSong} fill='#000' width="30px" height="30px" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 240.492 240.492">
              <g>
                <g id="Last_Page">
                  <path d="M45.136,3.597c-4.704-4.74-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.415,0,17.155l98.564,99.515l-98.564,99.515    c-4.704,4.74-4.704,12.415,0,17.155c4.704,4.74,12.319,4.74,17.011,0l107.058-108.092c2.587-2.587,3.621-5.919,3.356-9.468    c-0.205-2.755-1.383-5.714-3.356-7.699L45.136,3.597z" />
                  <path d="M203.864,0c-6.641,0-12.03,5.39-12.03,12.03v216.173c0,6.641,5.39,12.03,12.03,12.03c6.641,0,12.03-5.39,12.03-12.03    V12.03C215.894,5.39,210.505,0,203.864,0z" />
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Songs;