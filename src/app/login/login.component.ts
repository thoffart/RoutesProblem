import { AuthService } from './auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resetemail: string;

  constructor(private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: { resetemail: this.resetemail}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.resetemail = result;
      if (typeof this.resetemail !== 'undefined') {
        console.log('haha charade you are');
        this.authService.passwordReset(this.resetemail);
      }
    });
  }



  sendEmail() {
    console.log(this.resetemail);
  }


  Login(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.pass;
    this.authService.signinUser(email, password);
  }

}

  @Component({
    selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  })
  export class LoginDialogComponent {

    constructor(
      public dialogRef: MatDialogRef<LoginDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  }
