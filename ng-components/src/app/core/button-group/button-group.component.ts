import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'kdi-buttongroup',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {
  @Input() alignment = 'default';
  justify: string;
  constructor() { }

  ngOnInit(): void {
      if (this.alignment === 'default') {
          this.justify = '';
      } else if (this.alignment === 'spacing') {
          this.justify = 'kx-btngroup--spacing';
      } else if (this.alignment === 'justifyleft') {
          this.justify = ' kx-justify-content-start';
      } else if (this.alignment === 'justifycenter') {
          this.justify = ' kx-justify-content-center';
      } else if (this.alignment === 'justifyend') {
          this.justify = ' kx-justify-content-end';
      } else if (this.alignment === 'stretched') {
          this.justify = ' kx-btngroup--stretched';
      }
      console.log(this.alignment);
      
      console.log(this.justify);
      
    }
}
