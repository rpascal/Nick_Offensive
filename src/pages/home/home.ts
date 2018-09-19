import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('dickhead', 'assets/audio/dickhead.mp3')
  }

  sound(){
    this.nativeAudio.play('dickhead', () => console.log('uniqueId1 is done playing'));
  }

}
