import { Injectable } from '@angular/core';
import * as products from "../../assets/data/product.json";
import { Product } from '../model/product';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  // Create table with data based on the model
  private products: Product[] = [
    new Product(
      products.products.asterixFigure.picture,
      products.products.asterixFigure.name,
      products.products.asterixFigure.price,
      products.products.asterixFigure.description
    ),
    new Product(
      products.products.obelixFigure.picture,
      products.products.obelixFigure.name,
      products.products.obelixFigure.price,
      products.products.obelixFigure.description
    ),
    new Product(
      products.products.idefixFigure.picture,
      products.products.idefixFigure.name,
      products.products.idefixFigure.price,
      products.products.idefixFigure.description
    ),
  ]

  // return product from the service
  getProducts() : Observable <Product[]> {
    return of(this.products);
  }

  // return product from the service by id
  getProductsById(productId: string): Product {
    const foundProduct = this.products.find(product => product.id === productId);
    if (!foundProduct) {
      throw new Error ('Product not found');
    }
    return foundProduct;
  }
}

