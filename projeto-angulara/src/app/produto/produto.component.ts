import { Component } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  produtos = this.produtoService.listar();
  produto: Produto = { id: 0, nome: '', ativo: false };
  editando = false;

  constructor(private produtoService: ProdutoService) {}

  salvar() {
    if (this.editando) this.produtoService.atualizar(this.produto);
    else this.produtoService.inserir(this.produto);
    this.resetarFormulario();
  }

  editar(p: Produto) {
    this.produto = { ...p };
    this.editando = true;
  }

  excluir(id: number) {
    this.produtoService.remover(id);
    this.resetarFormulario();
  }

  resetarFormulario() {
    this.produtos = this.produtoService.listar();
    this.produto = { id: 0, nome: '', ativo: false };
    this.editando = false;
  }
}
