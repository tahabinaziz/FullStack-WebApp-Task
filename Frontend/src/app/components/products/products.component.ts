import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productData:any;
  selectedProducts:any = [];
  constructor(private product:ProductsService , private dataService:DataService) { 

  }
  retrieveProductData(): void {

    this.product.readAll()
      .subscribe(
        data => {
          this.productData = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  ngOnInit(): void {
    this.retrieveProductData();
    this.dataService.castSelectedProducts.subscribe(selectedProducts => this.selectedProducts = selectedProducts);
  }

  addToCart(product: any){
    this.selectedProducts.push(product)
    this.dataService.addSelectedProduct(this.selectedProducts)
  }

}
