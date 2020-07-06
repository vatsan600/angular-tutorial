import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-base',
  templateUrl: './item-base.component.html',
  styleUrls: ['./item-base.component.css']
})
export class ItemBaseComponent implements OnInit {
  sourceUrl:string;
  itemName:string;
  itemDescription:string;
  constructor() { }

  ngOnInit(): void {
  }

}
