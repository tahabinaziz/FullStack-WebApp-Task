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
    });
  }

  removeAll(){
    this.dataService.addSelectedProduct([])
  }

  removeItem(id: Number){
    this.selectedProducts = this.selectedProducts.filter(function(item: any) {
      return item.id !== id
  })
  this.dataService.addSelectedProduct(this.selectedProducts)
   console.log(this.selectedProducts.id)  
  }
  getTotalAmount(){
    const sumValues = this.selectedProducts.reduce((accumulator: any, object: { price: any; }) => {
      return accumulator + object.price;
    }, 0);
    return sumValues;
  }
}
