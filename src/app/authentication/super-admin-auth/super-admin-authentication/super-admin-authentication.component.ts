import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-super-admin-authentication',
  templateUrl: './super-admin-authentication.component.html',
  styleUrls: ['./super-admin-authentication.component.scss']
})
export class SuperAdminAuthenticationComponent implements OnInit {

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
