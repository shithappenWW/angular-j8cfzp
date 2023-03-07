import { Component, OnInit } from '@angular/core';
import { SharedService, Product } from '../shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.products = this.sharedService.products;
  }

  // Add methods to add, update, or delete product data
}
