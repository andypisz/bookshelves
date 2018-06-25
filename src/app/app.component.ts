import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyA7vBba8gBgMu1daEKPo9wZ6tthze8NNv4',
      authDomain: 'bookshelves-angular.firebaseapp.com',
      databaseURL: 'https://bookshelves-angular.firebaseio.com',
      projectId: 'bookshelves-angular',
      storageBucket: 'bookshelves-angular.appspot.com',
      messagingSenderId: '40083813600'
    };
    firebase.initializeApp(config);
  }
}
