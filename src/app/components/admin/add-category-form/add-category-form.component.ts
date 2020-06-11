import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/shared/models/category.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.css']
})
export class AddCategoryFormComponent implements OnInit {
  addForm: FormGroup;

  constructor(private categoryService: CategoryService, private fb: FormBuilder) { 
    this.addForm = fb.group({
      name: ['', [ 
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
      ]],
      img: []
    });
  }

  ngOnInit() {
  } 

  addCategory() {
    let category: Category;
    category = this.addForm.value;
    this.categoryService.create(category);
    this.addForm.reset();
  }

  get name() {
    return this.addForm.get('name');
  }
  get img() {
    return this.addForm.get('img');
  }

}
