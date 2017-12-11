import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleitemFormComponent } from './saleitem-form.component';

describe('SaleitemFormComponent', () => {
  let component: SaleitemFormComponent;
  let fixture: ComponentFixture<SaleitemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleitemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleitemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
