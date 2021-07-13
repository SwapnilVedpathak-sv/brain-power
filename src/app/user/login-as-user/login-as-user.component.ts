import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-as-user',
  templateUrl: './login-as-user.component.html',
  styleUrls: ['./login-as-user.component.scss']
})
export class LoginAsUserComponent implements OnInit {

  @ViewChild('container', { read: ElementRef, static: false }) container!: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  actionButton() {
    this.container.nativeElement.classList.add('sign-up-mode')
  }

  removeClass() {
    this.container.nativeElement.classList.remove('sign-up-mode')
  }

}
