import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.scss']
})
export class UserAuthenticationComponent implements OnInit {

  @ViewChild('container', { read: ElementRef, static: false }) container!: ElementRef;

  
  constructor() { }

  ngOnInit(): void {
  }

  actionButton() {
    this.container.nativeElement.classList.add('sign-up-mode')
  }

  removeClass() {
    this.container.nativeElement.classList.remove('sign-up-mode')
  }

}
