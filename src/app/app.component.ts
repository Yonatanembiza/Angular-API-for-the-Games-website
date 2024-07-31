import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  names: string[]= ['Yonatan', 'Daniel', 'Kiniena', 'Tahguas', 'Yisaq'];

  onClickButton(){
    this.title = "button clicked";
  }

  students= [{name: "Jack", course: "MWA", gpa: 3.0},
    {name: "Jill", course: "MPP", gpa: 3.4},
    {name: "Jim", course: "MWA", gpa: 2.8}];

}

