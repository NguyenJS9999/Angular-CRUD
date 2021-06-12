import { Component, OnInit } from '@angular/core';

import html2canvas from 'html2canvas';

@Component({
  selector: 'app-html2canvas',
  templateUrl: './html2canvas.component.html',
  styleUrls: ['./html2canvas.component.scss']
})
export class Html2canvasComponent implements OnInit {

  public html2canvas: any;


  constructor() { }

  ngOnInit(): void {
    this.capturescreen();
  }

  capturescreen() {
      html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas)
  });
  //   html2canvas(document.body).then((canvas)=> {
  //     console.log(canvas)

  //     var  getImage = canvas.toDateURL(); // Get defult png
  //     console.log(getImage)
  //   })
  }

  capturescreen2() {
      html2canvas(document.querySelector("#image2")).then(canvas => {
      document.body.appendChild(canvas)
  });
  }

}
