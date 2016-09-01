import Phaser from 'phaser';

import Rocket from '../sprites/rocket';

class Play extends Phaser.State {

  init() {
    // set up class variabels
    this.rocket = null;
    this.ground = null;

    // game world physics

    this.game.time.advancedTiming = true;

    // we don't want constrictions on the game camera
    this.camera.bounds = null;
  }

  create() {

    // create the player rocket
    this.rocket = new Rocket(this.game, 0, -32, 'rocket');
    this.game.add.existing(this.rocket);

    // create basic ground
    this.ground = new Phaser.Sprite(this.game, -this.game.width / 2, 0, 'ground');
    this.game.physics.arcade.enable(this.ground);
    this.game.add.existing(this.ground);


    this.ground.body.immovable = true;
    this.ground.body.allowGravity = false;
  }

  update() {
    // update our player
    this.rocket.update();

    // move ground under player the player
    this.ground.x = this.rocket.x - this.game.width / 2;

    // update camera
    this.camera.focusOnXY(this.rocket.x, this.rocket.y - this.game.height / 4);

    // check collisions
    this.game.physics.arcade.collide(this.rocket, this.ground);

  }

  render() {
    this.game.debug.text('FPS: ' + this.game.time.fps || '--', 2, 14, "#00ff00");
    this.game.debug.text('Gravity: ' + this.game.physics.arcade.gravity.y, 2, 32);
    this.game.debug.text('Fuel: ' + this.rocket.fuel, 2, 64, "#00ff00");
    this.game.debug.text('Thrust: ' + this.rocket.thrust, 2, 92, '#00ff00');
    this.game.debug.text('Altitude: ' + Math.floor(Math.abs(this.rocket.y)), 2, 108, "#00ff00");
  }

}

export default Play;