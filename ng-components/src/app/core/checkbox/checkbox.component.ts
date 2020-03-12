import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kdi-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() checked?: boolean;
  @Input() label?: string;
  @Input() disabled?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
