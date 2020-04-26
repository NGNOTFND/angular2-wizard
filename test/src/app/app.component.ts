import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  data = {
    email: ''
  };

  isCompleted = false;

  onStep1Next(event: any) {

  }

  onStep2Next(event: any) {

  }

  onStep3Next(event: any) {

  }

  onComplete(event: any) {

  }
}
