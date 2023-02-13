import Phaser from 'phaser';
import bulletImg from '../assets/level/bulletDark2_outline.png';
import towerImg from '../assets/level/tank_bigRed.png';
import enemyImg from '../assets/level/tank_sand.png';
import baseImg from '../assets/level/tankBody_darkLarge_outline.png';
import titleImg from '../assets/ui/title.png';
import cursorImg from '../assets/ui/cursor.png';
import blueButton1Img from '../assets/ui/blue_button02.png';
import blueButton2Img from '../assets/ui/blue_button03.png';
import logo2Img from '../assets/logo.png';
import level1TilesJSON from '../assets/level/level1.json';
import level1SpritesImg from '../assets/level/terrainTiles_default.png';

export default class PreloaderScene extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init() {
      this.readyCount = 0;
    }

    preload () {
      var width = this.cameras.main.width;
      var height = this.cameras.main.height;

      // Add logo image.
      this.add.image(width / 2, height / 2 - 100, 'logo');

      // Display progress bar.
      var progressBar = this.add.graphics();
      var progressBox = this.add.graphics();
      progressBox.fillStyle(0x222222, 0.8);
      progressBox.fillRect(width / 2 - 160, height / 2 - 20, 320, 50);

      // Loading text
      var loadingText = this.make.text({
        x: width / 2,
        y: height / 2 - 50,
        text: 'Loading...',
        style: {
          font: '20px monospace',
          fill: '#FFFFFF'
        }
      });
      loadingText.setOrigin(0.5, 0.5);

      // Percent progress text
      var progressText = this.make.text({
        x: width / 2,
        y: height / 2 - 5,
        text: '0%',
        style: {
          font: '18px monospace',
          fill: '#FFFFFF'
        }
      });
      loadingText.setOrigin(0.5, 0.5);

      // Loading assets text
      var assetText = this.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: '',
        style: {
          font: '18px monospace',
          fill: '#FFFFFF'
        }
      });
      assetText.setOrigin(0.5, 0.5);

      // Update progress bar
      this.load.on('progress', function(value) {
        progressText.setText(parseInt(value * 100) + '%')
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(width / 2 - 150, height / 2 - 15, 300 * value, 40);
      });

      // Update file progress text.
      this.load.on('fileprogress', function(file) {
        assetText.setText('Loading asset: ' + file.key);
      });

      // Remove progress bar when complete
      this.load.on('complete', function() {
        progressBox.destroy();
        progressBar.destroy();
        assetText.destroy();
        loadingText.destroy();
        progressText.destroy();
        this.ready();
      }.bind(this));

      // Time event for logo.
      this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

      // Load assets needed in our game.
      this.load.image('bullet', bulletImg);
      this.load.image('tower', towerImg);
      this.load.image('enemy', enemyImg);
      this.load.image('base', baseImg);
      this.load.image('title', titleImg);
      this.load.image('cursor', cursorImg);
      this.load.image('blueButton1', blueButton1Img);
      this.load.image('blueButton2', blueButton2Img);

      // Placeholder
      this.load.image('logo2', logo2Img);

      // Tile map in JSON format
      this.load.tilemapTiledJSON('level1', level1TilesJSON);
      this.load.spritesheet('level1', level1SpritesImg,
        { frameWidth: 64, frameHeight: 64 });
    }

    ready() {
      this.readyCount++;
      if (this.readyCount === 2) {
        this.scene.start("Main");
      }
    }
}
