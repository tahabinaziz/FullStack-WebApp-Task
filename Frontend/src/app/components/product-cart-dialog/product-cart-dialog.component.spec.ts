import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartDialogComponent } from './product-cart-dialog.component';

describe('ProductCartDialogComponent', () => {
  let component: ProductCartDialogComponent;
  let fixture: ComponentFixture<ProductCartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCartDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
