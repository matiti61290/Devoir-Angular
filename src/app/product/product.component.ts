import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe,
    CommonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
@Input() product!: Product;

constructor(private router: Router){}

  // routing until the product by name
  onViewProduct() {
    this.router.navigateByUrl(`products/${this.product.name}`)
  }
}
