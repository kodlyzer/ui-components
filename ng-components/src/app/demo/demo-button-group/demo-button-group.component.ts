import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-button-group',
  templateUrl: './demo-button-group.component.html',
  styleUrls: ['./demo-button-group.component.scss']
})
export class DemoButtonGroupComponent implements OnInit {
  demoBadge1 = {
    color: 'primary',
    label: 'Primary'
  };
  demoBadge2 = {
    color: 'secondary',
    label: 'secondary',
    size: 'small'
  };
  demoBadge3 = {
    color: 'secondary',
    label: 'secondary',
    size: 'small',
    fluid: 'fluid'
  };

  constructor() { }

  ngOnInit() {
  }
  get Badge() {
    return JSON.stringify(this.demoBadge2, null, 2);
  }

  set Badge(v) {
    try {
      this.demoBadge2 = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }
  }
}
