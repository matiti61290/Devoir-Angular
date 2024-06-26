import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from '../services/products.service';
import { Product } from '../model/product';
import { ProductComponent } from '../product/product.component';
import { SortByPricePipe } from '../pipe/sort-by-price.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductComponent,
    SortByPricePipe,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products!: Product[];
  filter = '';
  sortByPrice: "asc" | "desc" = "asc";

  constructor(
    private productService: ProductsService) {}

  ngOnInit(): void {
    // get products from the service
    this.products = this.productService.getProducts()
  };

  // method for search by name
  filterProducts(filter: string): void {
    this.filter = filter;
    if (!filter) {
      this.products = this.productService.getProducts();
      return;
    }

    this.products = this.productService.getProducts().filter(product => product.name.toLowerCase().includes(filter.toLowerCase().trim()));
  }
}