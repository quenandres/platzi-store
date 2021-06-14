import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  items = ['nicolas', 'julian', 'pedro'];
  power = 10;
  
  ngOnInit() {
    //Code
  }

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem( index: number ) {
    this.items.splice( index, 1 );
  }

}
