import { Component, OnInit } from '@angular/core';
import data from '../../dataShopItem';

@Component({
  selector: 'app-shopping-home-page',
  templateUrl: './shopping-home-page.component.html',
  styleUrls: ['./shopping-home-page.component.scss']
})
export class ShoppingHomePageComponent implements OnInit {
  public dataShopItem = data;

  constructor() { }

  ngOnInit(): void {
  }

}
