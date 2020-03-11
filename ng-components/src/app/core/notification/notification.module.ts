import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent, KdiNotificationHeader, KdiNotificationContent } from './notification.component';

@NgModule({
  declarations: [
    NotificationComponent,
    KdiNotificationHeader,
    KdiNotificationContent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationComponent,
    KdiNotificationHeader,
    KdiNotificationContent
  ]
})
export class NotifcationModule { }
