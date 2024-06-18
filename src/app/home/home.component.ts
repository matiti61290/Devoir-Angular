import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  products!: Product[];

  constructor( 
    private productService: ProductsService) {}

  ngOnInit(): void {
    // get products from the service
    this.products = this.productService.getProducts()
  }


}
