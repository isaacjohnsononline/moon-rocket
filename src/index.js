// import dependencies
import 'pixi';
import 'p2';
import Phaser from 'phaser';

// import states
import Boot from './states/boot';
import Preload from './states/preload';
import Menu from './states/menu';
import Play from './states/play';
import Upgrade from './states/upgrade';

class Game extends Phaser.Game {
  constructor() {
    super(960, 540, Phaser.AUTO, 'game');

    this.state.add('Boot', Boot);
    this.state.add('Preload', Preload);
    this.state.add('Menu', Menu);
    this.state.add('Play', Play);
    this.state.add('Upgrade', Upgrade);

    this.state.start('Boot');
  }
}

// let's go
new Game();