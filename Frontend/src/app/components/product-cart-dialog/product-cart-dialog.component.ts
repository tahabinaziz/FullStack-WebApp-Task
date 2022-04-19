import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-cart-dialog',
  templateUrl: './product-cart-dialog.component.html',
  styleUrls: ['./product-cart-dialog.component.css'],
})
export class ProductCartDialogComponent implements OnInit {
  selectedProducts: any = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.castSelectedProducts.subscribe((selectedProducts) => {
      this.selectedProducts = selectedProducts;
    });
  }

  removeAll() {
    this.dataService.addSelectedProduct([]);
  }

  removeItem(id: Number) {
    this.selectedProducts = this.selectedProducts.filter(function (item: any) {
      return item.id !== id;
    });
    this.dataService.addSelectedProduct(this.selectedProducts);
  }
  getTotalAmount() {
    const sumValues = this.selectedProducts.reduce(
      (accumulator: any, object: { price: any }) => {
        return accumulator + object.price;
      },
      0
    );
    return sumValues;
  }
  addCounter(data: any) {
  const newState = this.selectedProducts.map((obj : any) => 
      obj.id === data.id && !obj.numItems ? { ...obj, numItems : 1 , basePrice : obj.price } : obj
    );
    let objIndex = newState.findIndex(
      (obj: { id: number }) => obj.id === data.id
    );
    newState[objIndex].numItems++;
    newState[objIndex].price = newState[objIndex].basePrice * newState[objIndex].numItems;
    this.selectedProducts = newState;
    this.dataService.addSelectedProduct(newState);
  }
  removeCounter(data: any) {
    const newState = this.selectedProducts.map((obj : any) => 
    obj.id === data.id && !obj.numItems ? { ...obj, numItems : 1 , basePrice : obj.price } : obj
  );
  let objIndex = newState.findIndex(
    (obj: { id: number }) => obj.id === data.id
  );
  if(newState[objIndex].numItems === 1){
    this.selectedProducts = this.selectedProducts.filter(function (item: any) {
      return item.id !== data.id ;
    });
    this.dataService.addSelectedProduct(this.selectedProducts);
  }
  else{
  newState[objIndex].numItems--;
  newState[objIndex].price = newState[objIndex].basePrice * newState[objIndex].numItems;
  this.selectedProducts = newState;
  this.dataService.addSelectedProduct(newState);
    }
  }
}
