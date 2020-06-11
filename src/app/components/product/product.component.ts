import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Observable, Subscription, of } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { take, tap, finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  product$: Observable<Product>;
  nutries$: Observable<Map<string, number[]>>;
  subscription: Subscription = new Subscription();


  constructor(private productService: ProductService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    let uid = this.route.snapshot.paramMap.get('uid');
    this.product$ = this.productService.getByUid(uid);
    this.nutries$ = this.product$.pipe(
      map((prod) => this.formatNutries(prod))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  formatNutries(product: Product): Map<string, number[]> {
    let nutries = new Map()
    for (let k in product.nutriValues) {
      let arr: number[] = [product.nutriValues[k], (product.nutriValues[k] * product.portionWeight / 100)];
      nutries.set(k, arr );
    }
    return nutries;
  }

}
