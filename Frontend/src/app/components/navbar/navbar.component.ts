import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ProductCartDialogComponent } from '../product-cart-dialog/product-cart-dialog.component';

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
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProductCartDialogComponent, {
      height: '600px',
      width: '1200px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }
}

