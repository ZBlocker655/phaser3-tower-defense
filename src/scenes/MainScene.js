import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene
{
    constructor () {
        super('Main');
    }

    preload () {
    }

    create () {
        const logo = this.add.image(400, 150, 'logo2');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}
