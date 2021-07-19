import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(public http: HttpClient) { }

  readonly baseUrl = 'http://localhost:3000';
  readonly AllCertificate = '/brainPowerData';
  readonly register = '/signUp';
  readonly login = '/signIn';

  getList() {
    return this.http.get(`${this.baseUrl}${this.AllCertificate}`);
  }

  registerUser(body: any) {
    return this.http.post(`${this.baseUrl}${this.register}`, body, {
      observe: 'body',
    });
  }
}
