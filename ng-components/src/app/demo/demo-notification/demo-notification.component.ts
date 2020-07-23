import { Component, OnInit } from '@angular/core';
interface Notifcationgrp {
  color: string;
  value: boolean;
};
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
  status: string;
  notificationtype: Array<Notifcationgrp> = [
    {color : 'Neutral', value : false},
    {color : 'Success', value : false},
    {color : 'Danger', value : false},
    {color : 'Warning', value : false},
    {color : 'Critical', value : false}
  ];

  constructor() { }

  ngOnInit() {
    this.status = this.notificationtype[0].color;
    this.notificationtype[0].value = true;
   }
   changeNotification() {
     this.notificationtype.filter( (x: Notifcationgrp) =>{
      x.value = false;
      if (x.color === this.status){
        x.value = true;
      }
     });
   }
}
