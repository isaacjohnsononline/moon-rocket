import Phaser from 'phaser';

class Menu extends Phaser.State {

  init() {

  }

  onClick() {
    this.state.start('Play');
  }

  create() {
    this.game.add.button(this.game.width / 2, this.game.height / 2, 'go', this.onClick, this);
    this.game.add.text(32, 32, 'Menu', {fill: "#ff0044"});

  }

}

export default Menu;