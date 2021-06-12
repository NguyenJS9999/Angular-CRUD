import { Component, OnInit } from '@angular/core';
import data from '../../dataNews';

import { Router, ActivatedRoute, Params } from '@angular/router'; // thư viện lấy params

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public dataNews: any = data; // Lấy dữ liêu từ file JSON

  public searchInput: any; // Data nhập từ ô search

  public resultSeach: any; // Data trả về sau khi lọc

  public key: any;
  public value: any;
  public findKey: any;
  public findValue: any;

  public filterItem: any; // kết quả sau tìm kiếm

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    // this.onSearch();
  }
  backLogin() {
    window.location.replace('http://localhost:4200/login');
  }
  logOut() {
    localStorage.removeItem('token');
    window.location.replace('http://localhost:4200/login');
  }

  onSearch() {
    console.log('in ra data từ ô input :', this.searchInput); // in ra data từ ô input
    const searchInput = this.searchInput
    function filterContent(dataNews) {

      return dataNews.news == searchInput;
    }
    const searchContent = this.dataNews.find(filterContent)
    this.filterItem = searchContent.news
    console.log('kết quả sau khi lọc các content cần tìm: ', this.filterItem)




    // // var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
    // function filterItems(query) {
    //   return this.dataNews.filter(function(el) {
    //       return el.news.toLowerCase().indexOf(query.toLowerCase()) > -1;
    //   })
    // }
    // console.log(filterItems('News')); // ['apple', 'grapes']
    // console.log(filterItems('News A')); // ['banana', 'mango', 'orange']

  } // onSearch

} // export class HomeComponent implements OnInit
