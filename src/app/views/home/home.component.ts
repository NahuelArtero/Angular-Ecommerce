import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  loading = true;
  products!: Promise<Product[]>;
  productsPerPage = 10;
  currentPage = 1;
  currentPageProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getAllProducts();
    this.products.then(() => {
      this.loading = false;
      this.filteredProducts();
    });
  }

  filteredProducts() {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    this.products.then((products) => {
      console.log(products);
      this.currentPageProducts = products.slice(startIndex, endIndex);
    });
  }

  irPaginaSiguiente() {
    this.currentPage++;
    this.filteredProducts();
  }

  irPaginaAnterior() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.filteredProducts();
    }
  }
}
