import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class CheckoutComponent {

  nome = '';
  endereco = '';

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}

  finalizar() {
    if (!this.nome || !this.endereco) {
      alert("⚠️ Preencha nome e endereço!");
      return;
    }

    this.carrinhoService.limparCarrinho();
    alert(`🎉 Pedido finalizado!\nObrigado, ${this.nome}!`);
    this.router.navigate(['/']);
  }
}
