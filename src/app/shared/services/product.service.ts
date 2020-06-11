import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService<Product> {

  constructor(afs:AngularFirestore) { 
    super('products', afs);
  }

  getProductsByCategoryUid(uid:string): Observable<Product[]> {
    return this.afs.collection<Product>(this.collection, ref => ref.where('categories', 'array-contains', uid)).valueChanges({idField: 'uid'});
  }
}
