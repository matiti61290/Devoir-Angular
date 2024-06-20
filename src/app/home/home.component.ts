import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../model/product';
import { ProductComponent } from '../product/product.component';
import { SortByPricePipe } from '../pipe/sort-by-price.pipe';
import { CommonModule } from '@angular/common';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, map, startWith, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductComponent,
    SortByPricePipe,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ProductsService]
})


export class HomeComponent implements OnInit {

  products: Product[] = [];
  private destroyRef = inject(DestroyRef);
  readonly searchControl = new FormControl('')

  constructor( 
    private productService: ProductsService,
  ) {}

  ngOnInit(): void {
   combineLatest([
      this.productService.getProducts(),
      this.searchControl.valueChanges.pipe(startWith(''))
    ])
    .pipe(
      map(([products, searchFilter]) => {
        if (!searchFilter) {
          return products;
        }
        return products.filter(product => product.name.toLowerCase().includes(searchFilter.toLowerCase().trim()))
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(products => this.products = products)
  };

 sortByPrice: "asc" | "desc" = "asc";

}
