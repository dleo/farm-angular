import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleitemComponent } from './saleitem.component';

describe('SaleitemComponent', () => {
  let component: SaleitemComponent;
  let fixture: ComponentFixture<SaleitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
