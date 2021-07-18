import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-authentication',
  templateUrl: './admin-authentication.component.html',
  styleUrls: ['./admin-authentication.component.scss']
})
export class AdminAuthenticationComponent implements OnInit {

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
