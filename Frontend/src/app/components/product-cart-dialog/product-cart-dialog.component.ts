import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-cart-dialog',
  templateUrl: './product-cart-dialog.component.html',
  styleUrls: ['./product-cart-dialog.component.css']
})
export class ProductCartDialogComponent implements OnInit {
  selectedProducts:any = [];
  constructor(private dataService: DataService ) { }

  ngOnInit(): void {
    this.dataService.castSelectedProducts.subscribe((selectedProducts) => {
      this.selectedProducts = selectedProducts;
      console.log('selected product', this.selectedProducts);
    });
  }

  removeAll(){
    this.dataService.addSelectedProduct([])
  }

  removeItem(){
   console.log(this.selectedProducts.id)  
  }
  getTotalAmount(){
    const sumValues = this.selectedProducts.reduce((accumulator: any, object: { price: any; }) => {
      return accumulator + object.price;
    }, 0);
    return sumValues;
  }
}
