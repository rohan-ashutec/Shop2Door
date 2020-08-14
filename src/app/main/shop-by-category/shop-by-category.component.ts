import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-by-category',
  templateUrl: './shop-by-category.component.html',
  styleUrls: ['./shop-by-category.component.scss'],
})
export class ShopByCategoryComponent implements OnInit {
  cards = [
    {
      title: "UP TO 60% OFF",
      subtitle: "Fruits & Vegetables",
      image: "./assets/apples.png"
    }, {
      title: "UP TO 40% OFF",
      subtitle: "Beverages",
      image: "./assets/bevarages.png"
    }, {
      title: "UP TO 70% OFF",
      subtitle: "Home & Kitchen",
      image: "./assets/kitchen.png"
    },
  ]
  constructor() { }

  ngOnInit() { }

}
