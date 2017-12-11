import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleitemListComponent } from './saleitem-list.component';

describe('SaleitemListComponent', () => {
  let component: SaleitemListComponent;
  let fixture: ComponentFixture<SaleitemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleitemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleitemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
