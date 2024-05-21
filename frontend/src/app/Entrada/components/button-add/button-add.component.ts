import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent {

  @Input() item: any;

  constructor() { }

  add() {
    console.log('Agregando...');
  }
}
