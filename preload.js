const fs = require('fs');
const path = require('path');

window.addEventListener('DOMContentLoaded', () => {
  const cssPath = path.join(__dirname, 'style.css');
  fs.readFile(cssPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error leyendo style.css:', err);
      return;
    }
    const style = document.createElement('style');
    style.textContent = data;
    document.head.appendChild(style);
  });
  setTimeout(() => {
    //search box
    const searchBox = document.querySelector('ytmusic-search-box');
    if (searchBox) {
      const newSection = document.getElementsByClassName('scroller scroller-on-hover style-scope ytmusic-guide-section-renderer')[0];
      if (newSection) {
        newSection.appendChild(searchBox);
      } else {
        console.error('Error al mover search box');
      }
    } else {
      console.error('Error al encontrar search box');
    }

    //account settings section
    const accountSettings = document.querySelector('ytmusic-settings-button');
    if (accountSettings) {
      const newSection = document.getElementsByClassName('left-content style-scope ytmusic-nav-bar')[0];
      if (newSection) {
        newSection.appendChild(accountSettings);

      } else {
        console.error('Error al account settings section');
      }
    } else {
      console.error('Error al encontrar account settings section');
    }

    //play list title
    const playlistTitle = document.querySelector('ytmusic-queue-header-renderer');
    if (playlistTitle) {
      const newSection = document.getElementsByClassName('side-panel style-scope ytmusic-player-page')[0];
      if (newSection) {
        newSection.appendChild(playlistTitle);
      } else {
        console.error('Error al mover play list title');
      }
    } else {
      console.error('Error al encontrar play list title');
    }

    //toggle-video-audio
    const toggleVideoAudio = document.getElementsByClassName('av style-scope ytmusic-player-page')[0];
    if (toggleVideoAudio) {
      const newSection = document.getElementsByClassName('right-controls-buttons style-scope ytmusic-player-bar')[0];
      if (newSection) {
        newSection.appendChild(toggleVideoAudio);
        console.log("Botón con imagen añadido con éxito.");
      } else {
        console.error('Error al encontrar el contenedor de "right-controls-buttons".');
      }
    } else {
      console.error('Error al encontrar toggle-video-audio.');
    }

    const songButton = document.querySelector('.song-button.style-scope.ytmusic-av-toggle');
    const videoButton = document.querySelector('.video-button.style-scope.ytmusic-av-toggle');

    if (songButton) {
      const songImg = document.createElement('img');
      songImg.src = `file://${songIconPath}`; 
      songImg.alt = 'Song Icon';
      songButton.prepend(songImg); 
    } else {
      console.error('No se pudo encontrar el boton de musica');
    }

    if (videoButton) {
      const videoImg = document.createElement('img');
      videoImg.src = `file://${videoIconPath}`;
      videoImg.alt = 'Video Icon';
      videoButton.prepend(videoImg);
    } else {
      console.error('No se pudo encontrar el boton de video');
    }


  }, 1000);
});
