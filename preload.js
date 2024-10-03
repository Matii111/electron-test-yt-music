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
        console.error('Error al mover search box');
      }
    } else {
      console.error('Error al encontrar search box');
    }

    //play list title
    const playlistTitle = document.querySelector('ytmusic-queue-header-renderer');
    if (playlistTitle) {
      const newSection = document.getElementsByClassName('side-panel style-scope ytmusic-player-page')[0];
      if (newSection) {
        newSection.appendChild(playlistTitle);
      } else {
        console.error('Error al mover search box');
      }
    } else {
      console.error('Error al encontrar search box');
    }

    //play list title
    const addToPlayList = document.getElementsByClassName('av style-scope ytmusic-player-page')[0];
    if (addToPlayList) {
      const newSection = document.getElementsByClassName('right-controls-buttons style-scope ytmusic-player-bar')[0];
      if (newSection) {
        newSection.appendChild(addToPlayList);
      } else {
        console.error('Error al mover search box');
      }
    } else {
      console.error('Error al encontrar search box');
    }
  }, 1000);
});
