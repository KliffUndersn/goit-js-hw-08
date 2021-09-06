import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerTime = 'video-played-time';
const player = new Player('vimeo-player');
const getTime = () => {player.getCurrentTime().then(time => localStorage.setItem(playerTime,time));}

player.on('play',() => {if (localStorage.getItem(playerTime))
  {player.setCurrentTime(localStorage.getItem(playerTime))};
});
player.on('seeked',getTime);
player.on('timeupdate',throttle(getTime,1000));


