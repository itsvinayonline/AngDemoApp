import {Component} from '@angular/core';
import {Http} from '@angular/http';
import { promise } from 'selenium-webdriver';

@Component({
    selector: 'app-login',
    templateUrl: '../login/login.component.html'
})

export class LoginComponent {

    constructor(private http: Http) {}

    login(){ 
        let self = this;
        let postData={
            'email': 'peter@klaven',
            'password': 'cityslicka'
        };

        return new Promise((resolve, reject) => {
            self.http
            .post('https://reqres.in/api/login', postData)
            .subscribe((response) => {
                alert('yes');
                resolve(response);

            },
            (err) => {
                alert('Error');
            });
        });

    }

     openRegistration() {
        alert('Hello');
    }
}
