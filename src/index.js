import Phaser from 'phaser';
import config from './config/config';
import MainScene from './scenes/MainScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Main', MainScene);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.start('Boot');
  }
}

window.onload = function() {
  window.game = new Game();
}
