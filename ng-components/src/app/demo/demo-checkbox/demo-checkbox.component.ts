import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox',
  templateUrl: './demo-checkbox.component.html',
  styleUrls: ['./demo-checkbox.component.scss']
})
export class DemoCheckboxComponent implements OnInit {

  demoCheckbox1 = {
    checked: true,
    label: 'First Checkbox',
    disabled: null
  };

  demoCheckbox2 = {
    checked: true,
    label: 'Second Checkbox',
    disabled: true
  };

  demoCheckbox3 = {
    checked: null,
    label: 'Third Checkbox',
    disabled: null
  };

  constructor() { }

  ngOnInit(): void {
  }


  get Checkbox() {
    return JSON.stringify(this.demoCheckbox1, null, 2);
  }

  set Checkbox(v) {
    try {
      this.demoCheckbox1 = JSON.parse(v);
    } catch (error) {
      console.log('Error while typing JSON');
    }
  }
}
