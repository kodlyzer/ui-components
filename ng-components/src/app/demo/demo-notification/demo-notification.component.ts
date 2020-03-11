import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-notification',
  templateUrl: './demo-notification.component.html',
  styleUrls: ['./demo-notification.component.scss']
})
export class DemoNotificationComponent implements OnInit {
  demoNotification = {
    header: 'Notification Title',
    // tslint:disable-next-line: max-line-length
    content: 'If needed (e.g. error message notifications), add extra information about the specific nature of a problem and a way to solve it.'
  };

  constructor() { }

  ngOnInit() {
  }
  get Badge() {
    return JSON.stringify(this.demoNotification, null, 2);
  }

  set Badge(v) {
    try {
      this.demoNotification = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }
  }
}
