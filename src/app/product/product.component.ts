import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
@Input() product!: Product;

constructor(private router: Router){}

  // routing until the product by id
  onViewProduct() {
    this.router.navigateByUrl(`products/${this.product.id}`)
  }
}
