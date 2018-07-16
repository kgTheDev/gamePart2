class part1 extends Phaser.Scene {
  constructor() {
    super({key:'part1'});
  }
  preload() {
    this.load.spritesheet('PurpleGuy', 'assets/sprites/PurpleGuy.png', 80, 111, 17 );
    // this.load.image('wabbit', 'assets/sprites/wabbit.png');
  }
  create(){
    this.PurpleGuy = game.add.sprite(100, 150, 'PurpleGuy');
    this.animations.add('walk', [7, 8, 9, 10, 11, 12], 12, true);
    this.animations.play('walk');
    // var mySprite = this.add.sprite(300, 200, 'wabbit');
    // // this.input.keyboard.on('keyup_D', function(event){
    // //   this.image.x += 10;
    // // },this);
    // this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    //
    // this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    //
    // this.input.on('pointerdown', function(event){
    //   this.image.x = event.x;
    //   this.image.y = event.y;
    // },this);
    //
    // this.input.keyboard.on('keyup_P', function(event){
    //   var physicsImage = this.physics.add.image(this.image.x, this.image.y, "wabbit");
    //   physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,100),-300);
    // },this);

    // this.input.keyboard.on('keyup', function(e){
    //   if(e.key == "2"){
    //     this.scene.start('part2');
    //   }
    //   if(e.key == "<"){
    //     this.scene.start('part2');
    //   }
    //   if(e.key == ">"){
    //     this.scene.start('part2');
    //   }
    //
    // },this);

  }
  update(delta){
    if(this.key_A.isDown)
      this.image.x--;
    else if(this.key_D.isDown)
        this.image.x++;
  }
}
