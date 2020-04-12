import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'] 
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }
  title = "Ürün Listesi";
  filterText = "";
  products: Product[] = [
    { id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Zenbook", imageUrl: "https://via.placeholder.com/286x180.png" },
    { id: 2, name: "Mouse", price: 25, categoryId: 2, description: "A4 Tech", imageUrl: "https://dummyimage.com/286x180.png?text=Mouse" },
    { id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Zenbook", imageUrl: "http://fakeimg.pl/286x180?font=museo" },
    { id: 2, name: "Mouse", price: 25, categoryId: 2, description: "A4 Tech", imageUrl: "http://placeskull.com/286/180" },
    { id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Zenbook", imageUrl: "https://via.placeholder.com/286x180.png" },
    { id: 2, name: "Mouse", price: 25, categoryId: 2, description: "A4 Tech", imageUrl: "https://via.placeholder.com/286x180.png" }
  ];
  ngOnInit(): void {
  }

  addToCart(product) {
    this.alertifyService.success(product.name +" added.");
  }

}
