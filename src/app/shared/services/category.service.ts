import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends DataService<Category> {

  constructor(afs: AngularFirestore) { 
    super('categories', afs);
  }

}
