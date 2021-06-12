import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userName;
  public passWordNumber;
  // Thông tin đăng nhập fix cứng
  tenDangNhap = 'Nguyen';
  matKhau = '123456';
  //
  hideInformation = true;
  donate = { money: 18 }
  //
  usernameErrors = '';
  passWordErrors = '';

  constructor() {}
  ngOnInit(): void {
    // this.onSubmit()
  }
  Hide() {
    this.hideInformation = !this.hideInformation;
  }
  onSubmit() {
    if (/[a-z]/ .test(this.userName)) {
      console.log('Đúng tên đăng nhập kí tự loại chữ');
      this.usernameErrors = ""
    }
    else{
      this.usernameErrors = 'Sai kí tự loại chữ';
    }

    //
    if ( (this.userName === this.tenDangNhap) &&
         (this.passWordNumber === this.matKhau) )
    {
      console.log('Đúng 100% tên đăng nhập')
      console.log('Đúng 100% mật khẩu');
      this.usernameErrors = '';
      this.passWordErrors = '';

      localStorage.setItem('token', "choPhepTruyCapHome" )
      window.location.replace("http://localhost:4200/home");
    }

    // if (this.userName.lenth = 6) {
    //   this.usernameErrors = '9 kí tự'
    // }
    //
    if (this.userName !== this.tenDangNhap) {
      this.usernameErrors = 'Sai tên đăng nhập tuy đúng dạng văn bản';
    }
    if (!this.userName) {
      this.usernameErrors = 'Do not empty username';
    }


    // Numb
    if ( /[0-9]/.test(this.passWordNumber)) {
       console.log('Đúng kí tự loại số');
       this.passWordErrors = ""
    } else{
      this.passWordErrors = 'Sai kí tự loại số';
    }
    if (this.passWordNumber !== this.matKhau) {
      this.passWordErrors = 'Sai mật khẩu  tuy đúng dạng số';
    }
    if (!this.passWordNumber) {
      this.passWordErrors = 'Do not empty password';
    }

  } // Onsubmit
} // class ValueDateComponent
