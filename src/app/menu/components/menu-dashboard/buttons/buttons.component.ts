import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onResizeEnd(event: ResizeEvent):void{
    console.log('Element resized: ', event)
  }

}
