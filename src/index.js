import Phaser from 'phaser';
import config from './config/config';
import MainScene from './scenes/MainScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Main', MainScene);
    this.scene.start('Main');
  }
}

window.onload = function() {
  window.game = new Game();
}
