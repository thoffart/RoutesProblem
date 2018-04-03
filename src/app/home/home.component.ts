import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {

  }

  changeBar() {
     $('nav.side-navbar').toggleClass('show-sm');
     $('.page').toggleClass('active-sm');
  }
}
