import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [];
  private idAtual = 1;

  listar(): Produto[] {
    return this.produtos;
  }

  inserir(produto: Produto) {
    produto.id = this.idAtual++;
    this.produtos.push(produto);
  }

  atualizar(produto: Produto) {
    const i = this.produtos.findIndex(p => p.id === produto.id);
    if (i !== -1) this.produtos[i] = produto;
  }

  remover(id: number) {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }

  detalhar(id: number): Produto | undefined {
    return this.produtos.find(p => p.id === id);
  }
}