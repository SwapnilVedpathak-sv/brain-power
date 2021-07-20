import { Component } from '@angular/core';
import { RootService } from './Services/root.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brainPower';
  constructor(private root: RootService) {}

  ngOnInit(): void {

    // this.root.getList().subscribe((result) => {
    //   console.log("Result", result)
    // })
    }
}
