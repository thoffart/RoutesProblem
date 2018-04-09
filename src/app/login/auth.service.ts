import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;
    emailverified: boolean;

    constructor(private router: Router) { }

    singupUser(email: string, password: string, username: string) {
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
           user.updateProfile({
            displayName: username
          }).then(function() {
            console.log('nome top');
          }).catch(function(error) {
            console.log('nome deu errado');
          });
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
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => this.token = token
                );
                console.log('to aqui');
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
        this.router.navigate(['/']);
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

    ReturnUsername(): string{
        return firebase.auth().currentUser.displayName;
    }

}
