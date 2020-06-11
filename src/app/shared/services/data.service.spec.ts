import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('StoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService<any> = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
