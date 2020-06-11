import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { AddCategoryFormComponent } from './components/admin/add-category-form/add-category-form.component';
import { EditCategoryComponent } from './components/admin/edit-category/edit-category.component';
import { AddProductFormComponent } from './components/admin/add-product-form/add-product-form.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'category/:uid', component: CategoryComponent },
  { path: 'product/:uid', component: ProductComponent },
  { path: 'admin', component: AdminPanelComponent, children: [
    { path: 'category/add', component: AddCategoryFormComponent },
    { path: 'category/edit', component: EditCategoryComponent },
    { path: 'product/add', component: AddProductFormComponent },
    { path: 'product/edit', component: EditProductComponent } 
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
