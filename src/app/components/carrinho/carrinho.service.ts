import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {

  itens: any[] = [];

  constructor() {
    this.carregar();
  }

  carregar() {
    const dados = localStorage.getItem("carrinho");
    this.itens = dados ? JSON.parse(dados) : [];
  }

  salvar() {
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  adicionarItem(produto: any) {
    const itemExistente = this.itens.find(p => p.id === produto.id);

    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      this.itens.push({ ...produto, quantidade: 1 });
    }

    this.salvar();
  }

  listarItens() {
    this.carregar();
    return this.itens;
  }

  removerItem(index: number) {
    this.itens.splice(index, 1);
    this.salvar();
  }

  limparCarrinho() {
    this.itens = [];
    this.salvar();
  }
}
