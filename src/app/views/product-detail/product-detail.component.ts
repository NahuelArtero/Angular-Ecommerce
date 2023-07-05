import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product!: Product;
  description!:string;
  loading = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.init(id);
    }
  }
  async init(id: string) {
    try {
      this.product = await this.productService.getById(id);
      this.description = await this.productService.getByIdDescription(id)
      this.loading = false;
    } catch (err) {
      console.log(err);
    }
  }
  goBack(){
    this.router.navigate(['/']);
  }
  buyProduct() {
    this.snackBar.open('Added to cart', 'Close', {
      duration: 5000
    });
  }
  
}
