import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './shared/services/product.service';
import { CategoryService } from './shared/services/category.service';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { AddCategoryFormComponent } from './components/admin/add-category-form/add-category-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCategoryComponent } from './components/admin/edit-category/edit-category.component';
import { AddProductFormComponent } from './components/admin/add-product-form/add-product-form.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { CategoryFormComponent } from './components/admin/category-form/category-form.component';
import { ManagmentListComponent } from './components/admin/managment-list/managment-list.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    CategoryComponent,
    ProductComponent,
    AdminPanelComponent,
    AddCategoryFormComponent,
    EditCategoryComponent,
    AddProductFormComponent,
    EditProductComponent,
    CategoryFormComponent,
    ManagmentListComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    ProductService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
