import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;
    emailverified: boolean;

    constructor(private router: Router) { }

    singupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            response => {
                const user: any = firebase.auth().currentUser;
           user.sendEmailVerification().then(
               success => {
                console.log('please verify your email');
                window.alert('please verify your email');
                this.router.navigate(['/']);
               }
           ).catch(
               error => console.log(error)
           );
            }
        )
        .catch(
            error =>  {
                console.log(error);
                window.alert(error.message);
            }
        );
    }


    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                firebase.auth().currentUser.getToken()
                .then(
                    (token: string) => this.token = token
                );
                this.router.navigate(['/home']);
                console.log(response);
            }
        ).catch(
            error => window.alert(error.message)
        );
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    isVerified() {
        if (firebase.auth().currentUser.emailVerified) {
            return true;
        } else {
            window.alert('please verify your email');
            return false;
        }
    }

    passwordReset(email: string) {
        firebase.auth().sendPasswordResetEmail(email);
    }

}
