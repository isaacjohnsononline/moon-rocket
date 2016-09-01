import Phaser from 'phaser';

class Preload extends Phaser.State {

  init() {
    this.background = null;
    this.preloaderBar = null;
  }

  preload() {
    // create our preloader assets
    this.preloaderBackground = this.add.sprite(0, 0, 'preloaderBackground');
    this.preloaderBar = this.add.sprite(300, 400, 'preloaderBar');

    // set the preload sprite
    this.load.setPreloadSprite(this.preloaderBar);

    // load game assets
    this.load.image('ground', './assets/ground.png');
    this.load.spritesheet('rocket', '/assets/rocket.png', 32, 32);
  }

  create() {
    this.state.start('Play');
  }
}

export default Preload;