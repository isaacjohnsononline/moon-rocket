import Phaser from 'phaser';

class Boot extends Phaser.State {

  init() {

  }

  preload() {
    this.load.image('preloaderBackground', './assets/preloader_background.png');
    this.load.image('preloaderBar', './assets/preloader_bar.png');
  }

  create() {
    //  By this point the preloader assets have loaded to the cache, we've set the game settings
    //  So now let's start the real preloader going

    this.state.start('Preload');
  }

}

export default Boot;