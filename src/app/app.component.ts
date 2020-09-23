import { Component } from '@angular/core';
import  * as data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 data = [
        {"name":"burger","price":"150","sourceUrl":"assets/images/Burger.jpg"},
        {"name":"pizza","price":"200","sourceUrl":"assets/images/Pizza.jpg"},
        {"name":"French Fries","price":"80","sourceUrl":"assets/images/FrenchFries.jpg"} 
    ]
}
