import { AuthService } from './../login/auth.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
  username: string;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.username = this.authservice.ReturnUsername();
    
  }
    ngDoCheck() {

  }

  logout() {
    this.authservice.logout();
  }

  changeBar() {
     $('nav.side-navbar').toggleClass('show-sm');
     $('.page').toggleClass('active-sm');
  }
}
