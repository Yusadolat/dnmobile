import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaPlugin, MediaObject } from '@ionic-native/media';
import { NativeAudio } from '@ionic-native/native-audio';
import { RadioPlayerProvider} from '../../providers/radio-player/radio-player'


/**
 * Generated class for the SecondPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
    player:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private media: MediaPlugin,private nativeAudio: NativeAudio,player: RadioPlayerProvider) {
  	this.player = player;


  }


play() {
  	this.player.play().then(() => {
  		console.log('Playing');
  	});
  }

  pause() {
  	this.player.pause();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
