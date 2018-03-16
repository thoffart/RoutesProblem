import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  Login(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.pass;
    this.authService.signinUser(email, password);
  }


}
