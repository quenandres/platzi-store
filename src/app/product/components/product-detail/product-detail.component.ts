import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {//Subscribe escucha los cambios
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => {       
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '123',
      title: 'Nuevo con angular',
      image: 'assets/images/stickers1.png',
      price: 64000,
      description: 'Test desde angular q'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {       
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      title: 'Act Nuevo con angular',
      price: 69000,
      description: 'Act Test desde angular q'
    };
    this.productsService.updateProduct('123',updateProduct)
    .subscribe(product => {       
      console.log(product);
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(product => {       
      console.log(product);
    });
  }
  
}
