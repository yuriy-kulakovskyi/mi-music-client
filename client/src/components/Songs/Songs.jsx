import React from 'react';
import './Songs.css';

const Songs = props => {

  let playing = false;
  const playSong = event => {
    const pageAudio = document.querySelectorAll(".audio");
    const pageSongsNames = document.querySelectorAll(".songName");

    if (event.target.classList.value === 'songName') {
      if (!playing) {
        pageAudio.forEach(item => item.pause());
        pageSongsNames.forEach(item => item.style.color = '#000');
        event.target.style.color = '#C850C0';
        event.nativeEvent.path[1].lastChild.play();
        playing = true;
      } else {
        pageAudio.forEach(item => item.pause());
        pageSongsNames.forEach(item => item.style.color = '#000');
        event.nativeEvent.path[1].lastChild.pause();
        playing = false;
      }
    } else {
      if (!playing) {
        pageAudio.forEach(item => item.pause());
        pageSongsNames.forEach(item => item.style.color = '#000');
        event.target.firstChild.lastChild.play();
        event.target.firstChild.firstChild.style.color = '#C850C0';
        playing = true;
      } else {
        pageAudio.forEach(item => item.pause());
        pageSongsNames.forEach(item => item.style.color = '#000');
        event.target.firstChild.lastChild.play();
        playing = false;
      }
    }
  };

  return (
    <div className='App__songs'>
      <div className="App__songs__header">
        <div className="App__songs__header__buttons-list">
          <div className="App__songs__header__buttons-list__button favourites">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="heart-15" width="30px" height="30px" viewBox="0 0 15 15">
              <path d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#10;&#9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"/>
            </svg>
            <h4 className="App__songs__header__buttons-list__button__title">Favourites</h4>
          </div>
          <div className="App__songs__header__buttons-list__button playlists">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="36px" viewBox="0 0 12 18" version="1.1">
              <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Rounded" transform="translate(-786.000000, -2859.000000)">
                      <g id="Image" transform="translate(100.000000, 2626.000000)">
                          <g id="-Round-/-Image-/-music_note" transform="translate(680.000000, 230.000000)">
                              <g>
                                  <polygon id="Path" points="0 0 24 0 24 24 0 24"/>
                                  <path d="M12,5 L12,13.55 C11.06,13.01 9.9,12.8 8.67,13.23 C7.33,13.71 6.3,14.9 6.06,16.3 C5.6,19.04 7.92,21.38 10.65,20.95 C12.61,20.64 14,18.84 14,16.85 L14,7 L16,7 C17.1,7 18,6.1 18,5 C18,3.9 17.1,3 16,3 L14,3 C12.9,3 12,3.9 12,5 Z" id="🔹-Icon-Color" fill="#1D1D1D"/>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
            </svg>
            <h4 className="App__songs__header__buttons-list__button__title">Playlists</h4>
          </div>
          <div className="App__songs__header__buttons-list__button recent">
            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path d="M15,11H13V7a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1h3a1,1,0,0,0,0-2ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/></svg>
            <h4 className="App__songs__header__buttons-list__button__title">Recent</h4>
          </div>
        </div>
      </div>
      <div className="App__songs__list">
        {props.songsList.map((val, key) => {
          return(
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
    </div>
  );
}

export default Songs;