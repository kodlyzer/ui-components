import { Component, OnInit, Input, Directive } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: 'kdi-notification-header'
  })
  // tslint:disable-next-line: directive-class-suffix
  export class KdiNotificationHeader {
  }

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: 'kdi-notification-content'
  })
  // tslint:disable-next-line: directive-class-suffix
  export class KdiNotificationContent {

  }

@Component({
    selector: 'kdi-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

    @Input() isNeutral: boolean;
    @Input() isSuccess: boolean;
    @Input() isWarning: boolean;
    @Input() isCritical: boolean;
    @Input() isDanger: boolean;
    type: string;
    constructor() { }

    ngOnInit(): void {
        if (this.isSuccess === true) {
            this.type = 'success';
        } else if (this.isWarning === true) {
            this.type = 'warning';
        } else if (this.isCritical === true) {
            this.type = 'critical';
        } else if (this.isDanger === true) {
            this.type = 'danger';
        } else {
            this.type = 'neutral';
        }

    }

}
