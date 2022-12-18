import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassesComponent} from "./classes/classes.component";
import {HomeComponent} from "./page/home/home.component";
import {CategoryComponent} from "./page/category/category.component";
import {ProductComponent} from "./page/product/product.component";
import {CategoriesComponent} from "./page/categories/categories.component";
import {LoginComponent} from "./page/login/login.component";
import {RegisterComponent} from "./page/register/register.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


const appRoutes: Routes = [
  { path:'',component: HomeComponent},
  { path:'login',component: LoginComponent},
  { path:'register',component: RegisterComponent},
  { path:'categories',component: CategoriesComponent},
  { path:'categories/:name',component: CategoryComponent},
  { path:'categories/:name/:id',component: ProductComponent},
]

@NgModule({
  declarations: [
    AppComponent,StudentComponent,ClassesComponent,
    HomeComponent,CategoryComponent,ProductComponent,
    CategoriesComponent,
    LoginComponent,RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
