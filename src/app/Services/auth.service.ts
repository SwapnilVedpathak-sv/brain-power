import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deployment } from './../Connection/Deployment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  URL = Deployment.baseUrl

  readonly signUpAsUser = '/signUpAsUser';
  readonly signInAsUser = '/signInAsUser';

  readonly signUpAsAdmin = '/signUpAsAdmin';
  readonly signInAsAdmin = '/signInAsAdmin';

  readonly signUpAsSuperAdmin = '/signUpSuperAdmin';
  readonly signInAsSuperAdmin = '/signInSuperAdmin';

  signUpUser(body: any) {
    return this.http.post(`${this.URL}${this.signUpAsUser}`, body, {
      observe: 'body',
    });
  }

  signUpAdmin(body: any) {
    return this.http.post(`${this.URL}${this.signUpAsAdmin}`, body, {
      observe: 'body',
    });
  }

  signUpSuperAdmin(body: any) {
    return this.http.post(`${this.URL}${this.signUpAsSuperAdmin}`, body, {
      observe: 'body',
    });
  }

  signInUser(body: any) {
    return this.http.post(`${this.URL}${this.signInAsUser}`, body, {
      observe: 'body',
    });
  }

  signInAdmin(body: any) {
    return this.http.post(`${this.URL}${this.signInAsAdmin}`, body, {
      observe: 'body',
    });
  }

  signInSuperAdmin(body: any) {
    return this.http.post(`${this.URL}${this.signInAsSuperAdmin}`, body, {
      observe: 'body',
    });
  }
}
