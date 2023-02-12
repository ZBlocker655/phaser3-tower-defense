import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
    }

    preload () {
      var width = this.cameras.main.width;
      var height = this.cameras.main.height;

      // Add logo image.
      this.add.image(width / 2, height / 2 - 100, 'logo');

      // Load assets needed in our game.
      this.load.image('bullet', '../assets/level/bulletDark2_outline.png');
      this.load.image('tower', '../assets/level/tank_bigRed.png');
      this.load.image('enemy', '../assets/level/tank_sand.png');
      this.load.image('base', '../assets/level/tankBody_darkLarge_outline.png');
      this.load.image('title', '../assets/ui/title.png');
      this.load.image('cursor', '../assets/ui/cursor.png');
      this.load.image('blueButton1', '../assets/ui/blue_button02.png');
      this.load.image('blueButton2', '../assets/ui/blue_button03.png');

      // Placeholder
      this.load.image('logo2', '../assets/logo.png');

      // Tile map in JSON format
      this.load.tilemapTiledJSON('level1', '../assets/level/level1.json');
      this.load.spritesheet('level1', '../assets/level/terrainTiles_default.png',
        { frameWidth: 64, frameHeight: 64 });
    }

    create () {
      //this.scene.start('Main');
    }
}
