import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ProductCartDialog } from '../product-cart-dialog/product-cart-dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private dataService: DataService , public dialog: MatDialog) {}

  selectedProducts = [];
  ngOnInit(): void {
    this.dataService.castSelectedProducts.subscribe((selectedProducts) => {
      this.selectedProducts = selectedProducts;
      console.log('selected product', this.selectedProducts);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProductCartDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

