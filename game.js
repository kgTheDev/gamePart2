var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
//loads it into game
function preload ()
{
    this.load.image('backpic', 'assets/backpic.png');
    this.load.image('landing', 'assets/landing.png');
    // this.load.image('backpic', 'src/game/assets/backpic.png');
    // this.load.image('backpic', 'src/game/assets/backpic.png');
    this.load.spritesheet('wabbit',
        'assets/sprites/wabbit.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}
//creates it into game
function create ()
{
  //background
  this.add.image(400, 300, 'backpic');
  //platforms
  platforms = this.physics.add.staticGroup();

  platforms.create(400, 568, 'landing').setScale(2).refreshBody();

  platforms.create(450, 400, 'landing');
  platforms.create(50, 250, 'landing');
  platforms.create(750, 220, 'landing');


  player = this.physics.add.sprite(100, 450, 'wabbit');

  player.setBounce(.4);
  player.setCollideWorldBounds(true);

  this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('wabbit', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'turn',
      frames: [ { key: 'wabbit', frame: 4 } ],
      frameRate: 20
  });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('wabbit', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
  });

  player.body.setGravityY(300);

  this.physics.add.collider(player, platforms);






}
//updates frame per frame
function update ()
{
  cursors = this.input.keyboard.createCursorKeys();

  if (cursors.left.isDown)
  {
      player.setVelocityX(-160);

      player.anims.play('left', true);
  }
  else if (cursors.right.isDown)
  {
      player.setVelocityX(160);

      player.anims.play('right', true);
  }
  else
  {
      player.setVelocityX(0);

      player.anims.play('turn');
  }

  if (cursors.up.isDown && player.body.touching.down)
  {
      player.setVelocityY(-330);
  }



}
