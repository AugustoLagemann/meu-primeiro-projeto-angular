import { Component } from '@angular/core';
import { NgFor, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CarrinhoService } from './carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './carrinho.html',
  styleUrls: ['./carrinho.css'],
})
export class CarrinhoComponent {

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}

  get itensCarrinho() {
    return this.carrinhoService.listarItens();
  }

  remover(index: number) {
    this.carrinhoService.removerItem(index);
  }

  finalizarCompra() {
    alert("🎉 Compra finalizada!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['/']);
  }

  get total() {
    return this.itensCarrinho.reduce(
      (total, item) => total + (item.preco * item.quantidade),
      0
    );
  }
}
