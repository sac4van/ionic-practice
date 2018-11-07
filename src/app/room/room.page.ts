import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  rooms = [];

  async ngOnInit() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('chatrooms/').on('value', resp => {
          if (resp) {
            this.rooms = [];
            resp.forEach(childSnapshot => {
              const room = childSnapshot.val();
              room.key = childSnapshot.key;
              this.rooms.push(room);
            });
          }
        });
      } else {
        this.navCtrl.navigateRoot('signin');
      }
    });
  }
  
  addRoom() {
    this.navCtrl.navigateForward('add-room');
  }

  joinRoom(key) {
    this.navCtrl.navigateRoot('chat/' + key);
  }


  async signOut() {
    try {
      await firebase.auth().signOut();
      this.navCtrl.navigateRoot('signin');

    } catch (error) {}
  }
}
