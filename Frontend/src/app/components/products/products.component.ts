import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productData:any;
  constructor(private product:ProductsService) { 

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
  }

}
