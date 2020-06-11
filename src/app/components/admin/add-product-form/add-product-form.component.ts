import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category.model';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {
  categories$: Observable<Category[]>;
  addForm: FormGroup;

  constructor(private productService: ProductService, private categoryService: CategoryService, private fb: FormBuilder) {
    this.categories$ = this.categoryService.getAllAndOrderByName();
    this.addForm = this.fb.group({
      name: [ '', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150)
      ]],
      grammare: [ '', [ 
        Validators.required 
      ]],
      description: [ '' ],
      composition: [ '', [ 
        Validators.required 
      ]],
      allergens: [ '', [ 
        Validators.required 
      ]],
      categories: [ '' ],
      img: [ '' ],
      portionWeight: [ '', [ 
        Validators.required 
      ]],
      nutriValues: this.fb.group({
        protein: [ '', [ 
          Validators.required, 
          Validators.min(0) 
        ]],
        fat: [ '', [ 
          Validators.required, 
          Validators.min(0) 
        ]],
        carbohydrate: [ '', [ 
          Validators.required, 
          Validators.min(0) 
        ]],
        sugar: [ '', [ 
          Validators.required, 
          Validators.min(0)
        ]],
        calories: [ '', [ 
          Validators.required, 
          Validators.min(0) 
        ]],
        sodium: [ '', [ 
          Validators.required, 
          Validators.min(0) 
        ]]
      })
    })
  }

  ngOnInit() {  }

  addProduct() {
    let product: Product = this.addForm.value;
    this.addForm.reset();
    return this.productService.create(product);
  }

  get name() {
    return this.addForm.get('name');
  }
  get grammare() {
    return this.addForm.get('grammare');
  }
  get description() {
    return this.addForm.get('description');
  }
  get composition() {
    return this.addForm.get('composition');
  }
  get allergens() {
    return this.addForm.get('allergens');
  }
  get img() {
    return this.addForm.get('img');
  }
  get portionWeight() {
    return this.addForm.get('portionWeight');
  }
  get protein() {
    return this.addForm.get('nutriValues.protein');
  }
  get fat() {
    return this.addForm.get('nutriValues.fat');
  }
  get carbohydrate() {
    return this.addForm.get('nutriValues.carbohydrate');
  }
  get sugar() {
    return this.addForm.get('nutriValues.sugar');
  }
  get calories() {
    return this.addForm.get('nutriValues.calories');
  }
  get sodium() {
    return this.addForm.get('nutriValues.sodium');
  }

}
