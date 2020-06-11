import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]>;
  product$: Observable<Product>
  categories$: Observable<Category[]>;
  editForm: FormGroup;
  subscription: Subscription = new Subscription();

  constructor(private productService: ProductService, private categoryService: CategoryService, private fb: FormBuilder) { }

  ngOnInit() {
    this.products$ = this.productService.getAll();
    this.categories$ = this.categoryService.getAll();
    this.createForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  edit(uid: string) {
    if (uid) {
      this.getProduct(uid);
    } else {
      console.log('add')
    }
  }

  getProduct(uid: string) {
    this.product$ = this.productService.getByUid(uid);
    this.setInitialValues();
  }

  updateProduct(uid: string) {
    let product: Product = this.editForm.value;
    product.uid = uid;
    return this.productService.update(product);
  }

  deleteProduct(uid: string) {
    return this.productService.delete(uid);
  }

  createForm() {
    this.editForm = this.fb.group({
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

  setInitialValues() {
    this.subscription = this.product$.subscribe( c => {
      this.editForm.setValue({
        name: c.name,
        grammare: c.grammare,
        description: c.description,
        composition: c.composition,
        allergens: c.allergens,
        categories: c.categories,
        img: c.img,
        portionWeight: c.portionWeight,
        nutriValues: {
          protein: c.nutriValues.protein,
          fat: c.nutriValues.fat,
          carbohydrate: c.nutriValues.carbohydrate,
          sugar: c.nutriValues.sugar,
          calories: c.nutriValues.calories,
          sodium: c.nutriValues.sodium
        }
      }) 
    })
  }

  get name() {
    return this.editForm.get('name');
  }
  get grammare() {
    return this.editForm.get('grammare');
  }
  get description() {
    return this.editForm.get('description');
  }
  get composition() {
    return this.editForm.get('composition');
  }
  get allergens() {
    return this.editForm.get('allergens');
  }
  get img() {
    return this.editForm.get('img');
  }
  get portionWeight() {
    return this.editForm.get('portionWeight');
  }
  get protein() {
    return this.editForm.get('nutriValues.protein');
  }
  get fat() {
    return this.editForm.get('nutriValues.fat');
  }
  get carbohydrate() {
    return this.editForm.get('nutriValues.carbohydrate');
  }
  get sugar() {
    return this.editForm.get('nutriValues.sugar');
  }
  get calories() {
    return this.editForm.get('nutriValues.calories');
  }
  get sodium() {
    return this.editForm.get('nutriValues.sodium');
  }

}
