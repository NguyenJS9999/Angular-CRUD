import { Component, OnInit } from '@angular/core';
import data from '../../dataNews';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  public dataNews = data

  constructor() { }

  ngOnInit(): void {
  }

  getDataNews() {

  }

  getDataConten() {

  }

}
