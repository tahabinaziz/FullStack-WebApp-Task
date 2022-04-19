import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private selectedProducts = new BehaviorSubject<any>([]);
   castSelectedProducts = this.selectedProducts.asObservable();
   
   
   addSelectedProduct(newSelectedProduct: any){
     this.selectedProducts.next(newSelectedProduct);
    
   }
}
