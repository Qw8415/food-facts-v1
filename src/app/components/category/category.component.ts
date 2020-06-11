import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService, private route: ActivatedRoute) { 
    let categoryUid = route.snapshot.paramMap.get('uid');
    this.products$ = productService.getProductsByCategoryUid(categoryUid);
  }
    

  ngOnInit() {
    
  }

}
