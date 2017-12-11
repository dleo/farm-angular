import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablesDemoComponent } from './datatables-demo.component';

describe('DatatablesDemoComponent', () => {
  let component: DatatablesDemoComponent;
  let fixture: ComponentFixture<DatatablesDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablesDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
