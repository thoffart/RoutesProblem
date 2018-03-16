import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signUp(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.pass;
    this.authService.singupUser(email, password);
  }

}
