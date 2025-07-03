import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-criar-produto',
  imports: [],
  templateUrl: './criar-produto.html',
  styleUrl: './criar-produto.css'
})
export class CriarProduto {
  produto : Produto = { id: 0, nome: '', ativo: false};
  constructor(private produtoService: ProdutoService, private router: Router) {}

  salvar() {
    this.produtoService.inserir(this.produto);
    this.router.navigate(['/produtos']);
  }

}
