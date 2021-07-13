import { NgModule } from '@angular/core';

// All Angular material imports goes here
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'


const modules = [
  MatButtonModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,

})
export class MaterialModuleModule { }
