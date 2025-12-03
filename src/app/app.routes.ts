import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { CarrinhoComponent } from './components/carrinho/carrinho';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carrinho', component: CarrinhoComponent }
];
