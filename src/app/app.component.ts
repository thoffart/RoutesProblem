import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      // tslint:disable-next-line:quotemark
      apiKey: "AIzaSyApeu9IGsdMzmCvT75Y3s-WwIAmxdbyFE4",
      // tslint:disable-next-line:quotemark
      authDomain: "routesproblem.firebaseapp.com"
    });
  }
}
