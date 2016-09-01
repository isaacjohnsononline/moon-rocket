import Phaser from 'phaser';

class Rocket extends Phaser.Sprite {
  constructor(game, x, y, texture) {
    super(game, x, y, texture);

    this.angle = -90;
    this.anchor.setTo(0.5, 0.5);

    this.fuel = 1000;
    this.thrust = 150;
    this.rotationSpeed = 100;

    this.game.physics.arcade.enable(this);

    this.body.gravity.y = 100;
  }

  update() {

    let up = this.game.input.keyboard.isDown(Phaser.Keyboard.UP);
    let left = this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
    let right = this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);

    if (up && this.fuel) {
      this.game.physics.arcade.accelerationFromRotation(this.rotation, this.thrust, this.body.acceleration);

      // decrease fuel
      this.fuel--;

      // change to flame frame
      this.frame = 1;
    } else {
      this.body.acceleration.set(0);
      this.frame = 0;
    }

    if (left) {
      this.body.angularVelocity = -this.rotationSpeed;
    } else if (right) {
      this.body.angularVelocity = this.rotationSpeed;
    } else {
      this.body.angularVelocity = 0;
    }
  }

}

export default Rocket;