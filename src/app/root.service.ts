import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(public http: HttpClient) { }

  readonly baseUrl = '';
  readonly AllCertificate = '/ndsCertificateData';
  readonly register = '/registerUser';
  readonly login = '/loginUser';

  getList() {
    return this.http.get(`${this.baseUrl}${this.AllCertificate}`);
  }
}
