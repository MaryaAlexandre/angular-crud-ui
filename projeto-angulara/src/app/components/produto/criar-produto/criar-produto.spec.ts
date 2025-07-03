import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProduto } from './criar-produto.component';

describe('CriarProduto', () => {
  let component: CriarProduto;
  let fixture: ComponentFixture<CriarProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
