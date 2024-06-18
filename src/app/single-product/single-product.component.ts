import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';
import { CommonModule, CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    CurrencyPipe
  ],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent implements OnInit{

  product!: Product;

  constructor (
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  this.getProduct()
  }

  // get product from the service by id
  private getProduct() {
    const productId = this.route.snapshot.params['id'];
    this.product = this.productsService.getProductsById(productId)
  }
}
