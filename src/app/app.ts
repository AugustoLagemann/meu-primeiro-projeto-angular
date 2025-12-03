import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CarrinhoService } from './components/carrinho/carrinho.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  constructor(private router: Router, private carrinhoService: CarrinhoService) {}

  get quantidadeCarrinho() {
    return this.carrinhoService
      .listarItens()
      .reduce((total, item) => total + item.quantidade, 0);
  }

  navegarHome() {
    this.router.navigate(['/']);
  }

  navegarCarrinho() {
    this.router.navigate(['/carrinho']);
  }
}
