import { Component } from '@angular/core';
// import dataBase from '/data' ;

// import data from '../../dataNews';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD';

  // public dataShopItem: any = dataBase;

  backHome() {
    window.location.replace("http://localhost:4200/home");
  }

  goHtml2Canvas() {
    window.location.replace("http://localhost:4200/Html2canvas");
  }

  goShoppingHomePage() {
    window.location.replace("http://localhost:4200/ShoppingHomePage");
  }

}
