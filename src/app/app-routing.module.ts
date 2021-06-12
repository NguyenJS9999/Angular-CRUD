import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorCRUDComponent } from './components/editor-crud/editor-crud.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Html2canvasComponent } from './components/html2canvas/html2canvas.component';

import { AppRouteGuard } from './share/app-route-guard';
import { AppRouteGuardLoginDone } from './share/app-route-guard-loginDone';
import { ShoppingHomePageComponent } from './components/shopping-home-page/shopping-home-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AppRouteGuardLoginDone],
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [AppRouteGuard],
  },
  {
    path: 'home/:id',
    component: HomeDetailComponent,
  },
  {
    path: 'EditorCRUD',
    component: EditorCRUDComponent,
  },
  {
    path: 'Html2canvas',
    component: Html2canvasComponent,
  },
  {
    path: 'ShoppingHomePage',
    component:ShoppingHomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
