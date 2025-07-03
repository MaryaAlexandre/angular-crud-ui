import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharProduto } from './detalhar-produto';

describe('DetalharProduto', () => {
  let component: DetalharProduto;
  let fixture: ComponentFixture<DetalharProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalharProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalharProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
