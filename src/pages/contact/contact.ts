import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  repos = [];

  constructor(public navCtrl: NavController) {
    this.repos = [
      {
        'name': 'Ez egy raktár',
        'id': 'egyes',
        'description': 'The official mascot of the Linux kernel!'
      },
      {
        'name': '1103',
        'id': '1103',
        'description': 'Halika'
      },
    ]
  }
}
