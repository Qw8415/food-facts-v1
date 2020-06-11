import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'managment-list',
  templateUrl: './managment-list.component.html',
  styleUrls: ['./managment-list.component.css']
})
export class ManagmentListComponent implements OnInit {
  @Input('items$') items$: Observable<any>;
  @Output('operation') operation = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.operation.emit();
  }

  edit(uid: string) {
    this.operation.emit(uid);
  }

}
