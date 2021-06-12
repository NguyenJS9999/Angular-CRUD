import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule } from '@angular/forms';
import { AppRouteGuard } from './share/app-route-guard';

import { HttpClientModule } from '@angular/common/http';
import { EditorCRUDComponent } from './components/editor-crud/editor-crud.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { Html2canvasComponent } from './components/html2canvas/html2canvas.component';
import { ShoppingHomePageComponent } from './components/shopping-home-page/shopping-home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EditorCRUDComponent,
    HomeDetailComponent,
    Html2canvasComponent,
    ShoppingHomePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Thêm from module
    HttpClientModule, // Thêm kết nối với API từ internet ở ngoài
    FormsModule,
  ],
  providers: [
    AppRouteGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
