import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Automatd Test';
  costOne = '£2,32';
  costTwo = '£3,32';
  cost_3 = '£1,62';
  cost4 = '£1,22';

  ngOnInit(): void {
    this.getValue(2)
  }

  private getValue(x: number) {
    if (x == 1) {
      this.title = this.title + ' 1';
    } if (x == 2) {
      this.title = this.title + ' 2';
    } if (x == 3) {
      this.title = this.title + ' 3';
    } else {
      this.title = this.title + ' Other';
    }
  }
}


