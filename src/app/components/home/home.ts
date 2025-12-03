import { Component } from '@angular/core';
import { NgFor, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho/carrinho.service';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {

  titulo = 'Bem-vindo à Loja de Hardware';

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado Mecânico RGB',
      preco: 199.9,
      imagem: 'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/t/g/tgt-shtkl-rbw0115663213.jpg'
    },
    {
      id: 2,
      nome: 'Mouse Gamer 7200 DPI',
      preco: 149.9,
      imagem: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/ejiiumos/file.png'
    },
    {
      id: 3,
      nome: 'Headset Surround 7.1',
      preco: 259.9,
      imagem: 'https://images.kabum.com.br/produtos/fotos/196254/headset-sem-fio-gamer-hyperx-cloud-flight-drivers-50mm-led-ps5-e-ps4-hhsf1-ga-bk-g_1634393239_gg.jpg'
    }
  ];

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarItem(produto);
    alert("🛒 Produto adicionado!");
  }

  irParaCarrinho() {
    this.router.navigate(['/carrinho']);
  }
}
