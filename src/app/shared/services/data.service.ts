import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { map } from 'rxjs/operators';


export class DataService<T extends Item> {
  
  constructor(protected collection: string, protected afs: AngularFirestore) { }

  create(item: T) {
    item.uid = this.afs.createId();
    return this.afs.collection(this.collection).doc(item.uid).set(item);
  }

  getAll(): Observable<T[]> {
    return this.afs.collection<T>(this.collection).valueChanges( { idField: 'uid' } );
  }

  getAllAndOrderByName(): Observable<T[]> {
    return this.afs.collection<T>(this.collection, ref => ref.orderBy('name')).valueChanges({idField: 'uid'});
  }

  getByUid(uid: string): Observable<T> {
    return this.afs.collection(this.collection).doc<T>(uid).snapshotChanges().pipe(
      map(doc => ({ uid: doc.payload.id, ...doc.payload.data()}))
    );
  }

  update(item: T) {
    return this.afs.collection(this.collection).doc(item.uid).update(item);
  }

  delete(uid: string) {
    return this.afs.collection(this.collection).doc(uid).delete();
  }
}
