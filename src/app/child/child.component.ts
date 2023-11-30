import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  isClicked=false;
  @Input() data: any;
  constructor() {}
  handleClick(){
    return this.isClicked=!this.isClicked;
  }
  ngOnInit(): void {}
}
