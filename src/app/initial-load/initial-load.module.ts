import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialLoadRoutingModule } from './initial-load-routing.module';
import { InitialLoadComponent } from './initial-load.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ChoiceComponent } from './choice/choice.component';


@NgModule({
  declarations: [
    InitialLoadComponent,
    SplashScreenComponent,
    ChoiceComponent
  ],
  imports: [
    CommonModule,
    InitialLoadRoutingModule
  ]
})
export class InitialLoadModule { }
