import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-base',
  templateUrl: './item-base.component.html',
  styleUrls: ['./item-base.component.css']
})
export class ItemBaseComponent implements OnInit {
  @Input()
  sourceUrl:string;
  @Input()
  itemName:string;
  @Input()
  price:string;
  displayNumberOfItems:number = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.sourceUrl)
  }
additem(){
this.displayNumberOfItems++;
}
subitem(){
  if(this.displayNumberOfItems != 0){
  this.displayNumberOfItems--;
}
}
}
