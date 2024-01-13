import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pro8';
  countNumber = 0 ;
  resetBtn()
  {
    this.countNumber = 0 ;
  }
  increaseBtn()
  {
    this.countNumber = this.countNumber + 1;
  }
  decreaseBtn()
  {
    this.countNumber = this.countNumber - 1;
  }
}
