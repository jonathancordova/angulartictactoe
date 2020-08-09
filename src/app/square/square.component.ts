import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: `
  <button>{{value}}</button>
  `,
  styleUrls: []
})
export class SquareComponent{
  @Input() value : 'X' | 'O';

  constructor() { }

  ngOnInit(): void {
  }

}
