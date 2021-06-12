import { Component, OnInit } from '@angular/core';
import data from '../../dataNews';

@Component({
  selector: 'app-editor-crud',
  templateUrl: './editor-crud.component.html',
  styleUrls: ['./editor-crud.component.scss'],
})
export class EditorCRUDComponent implements OnInit {
  public dataNews: any = data; // Lấy data từ file json
  //
  public iD: any; // Data Id
  public News: any; // Data News
  public Content: any; // Data Content

  public resultSeach: any[] = []; // Hiện thị dữ liệu sau lọc
  public getdata: any;

  public addID: any; // Data ID nhập từ ô input
  public addNews: any; // Data News nhập từ ô input
  public addContent: any; // Data từ ô input

  public searchInput: any; // Data nhận từ ô search
  public filterItem: any; // Kết quả trả vê sau tìm kiếm

  public itemID: any;

  public isUpdate = false; // ngIf ẩn hiện nút, bth ko dùng là ẩn

  constructor() {}

  ngOnInit() {
    this.getData();
  }
  //Chức năng chung thao tác với data
  // 1 Hiện tất cả Data
  getData() {
    console.log(this.dataNews);
    return this.dataNews;
  }

  ///////////////////////////////////////////////////////////////////
  // 2 Tìm kiếm data-dựa vào Doc Js
  public searchData() {
    console.log('in ra data từ ô input :', this.searchInput); // in ra data từ ô input
    const searchInput = this.searchInput;

    function filterContent(dataNews: { id: any }) {
      // Hàm tra về các id ?
      return dataNews.id == searchInput;
    }
    const searchContent = this.dataNews.find(filterContent);
    console.log(searchContent);
    this.filterItem = searchContent;
    console.log(
      'kết quả sau khi lọc các content cần tìm theo id: ',
      this.filterItem.news,
      'Nội dung chi tiết: ',
      this.filterItem.content
    );
    this.isUpdate = false;
  }

  // 3 Thêm Data vào chuỗi các object
  insertAddData(): void {
    console.log(
      'Data từ 3 ô input: ',
      this.addID,
      this.addNews,
      this.addContent
    );

    if (!(this.addID, this.addNews, this.addContent)) {
      // ! khác cụm 3 data là rỗng
      console.log('Chưa nhập data');
      // return this.dataNews;
    } else {
      this.dataNews.push({
        id: this.addID,
        news: this.addNews,
        content: this.addContent,
      }); // {Add key: value}, key ở dataNew trùng 100% được ghép thêm
    }
  }

  // 4.1 Chỉnh sửa Data
  editData(item): void {
    console.log(item); // Data trả trả về object theo id
    this.isUpdate = true;
    this.itemID = item.id; // Id từ item chỉ về được công khai cho hàm khác dùng
    // Tryền data lên ô input
    this.addNews = item.news;
    this.addContent = item.content;
    // Ghi đè
    this.update();
  }

  // 4.2 Chỉnh sửa Data
  update() {
    this.isUpdate = true;
    // GET data Cả chuỗi
    const array = this.dataNews;
    // Current data
    const dataFound = array.find((f) => f.id == this.itemID); // Dùng ItemID dc trỏ riêng
    // console.log(item.id) // Trả về số id theo object vs id chỉ về // bỏ
    console.log('dataFound: ', dataFound); // Trả về object theo id của Data
    console.log('itemID', this.itemID);
    dataFound.news = this.addNews;
    dataFound.content = this.addContent;
    // Load list
    this.getData();
  }

  // 5 Xóa Data
  deleteData(item): void {
    this.isUpdate = false;
    // Get
    const array = this.dataNews;
    // Delete Lọc ra nhưng ko lấy cái đó !=
    const arr = array.filter((f) => f.id != item.id);
    console.log(item);
    // Save Lưu lại vào mảng trước đó - cập nhập ghi đè
    this.dataNews = arr;
    // Load list
    this.getData();
  }
}
