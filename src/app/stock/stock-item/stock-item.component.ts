import { Component, OnInit } from '@angular/core';
import {Stock} from '../../model/stock';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock: Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock("HAMED R", "HMD", 800, 300);
  }

  toggleFav(event){
    console.log("Toggled event", event);
    this.stock.fav = !this.stock.fav;
  }
}
