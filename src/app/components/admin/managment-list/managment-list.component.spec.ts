import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentListComponent } from './managment-list.component';

describe('ManagmentListComponent', () => {
  let component: ManagmentListComponent;
  let fixture: ComponentFixture<ManagmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
