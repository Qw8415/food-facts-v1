import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Observable, Subscription } from 'rxjs';
import { Category } from 'src/app/shared/models/category.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  categories$: Observable<Category[]>;
  category$: Observable<Category>;
  editForm: FormGroup;
  subscription: Subscription = new Subscription();

  constructor( 
    private categoryService: CategoryService,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.categories$ = this.categoryService.getAllAndOrderByName();
    this.editForm = this.fb.group({
      name: ['', [ 
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
      ]],
      img: []
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getCategory(uid: string) {
    this.category$ = this.categoryService.getByUid(uid);
    this.subscription = this.category$.subscribe( c => {
      this.editForm.setValue({
        name: c.name,
        img: c.img
      });
    });
  }

  delete(uid: string) {
    if (this.categoryService.delete(uid)) {
      this.category$ = null;
      return true
    }
    return false;
  }

  update(uid: string) {
    let category: Category = this.editForm.value;
    console.log(category);
    category.uid = uid;
    return this.categoryService.update(category);
  }

  get name() {
    return this.editForm.get('name');
  }
  get img() {
    return this.editForm.get('img');
  }



}
