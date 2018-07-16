class part3 extends Phaser.Scene {
  constructor(){
    super({key:'part3'})
  }
  preload(){
      this.load.audio('zap', ['assets/audio/SoundEffects/lazer.wav']);
  }

  create(){
    this.soundFX = this.sound.add('zap', { loop: 'true'});
    this.soundFX.play();
  }
}
