import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  fruits = [
    {
      disount: "UP TO 16% OFF",
      title: "Fruits Vegetables & Baskets",
      gram: "200g+200g+200g",
      price: "₹35",
      image: "./assets/Banana.png"
    }, {
      disount: "UP TO 16% OFF",
      title: "Fruits",
      gram: "200g+200g+200g",
      price: "₹35",
      image: "./assets/apple.png"
    }, {
      disount: "UP TO 16% OFF",
      title: "Vegetables",
      gram: "200g+200g+200g",
      price: "₹35",
      image: "./assets/tomato.jpg"
    }, {
      disount: "UP TO 16% OFF",
      title: "Cut Fresh 7 Herbs",
      gram: "200g+200g+200g",
      price: "₹35",
      image: "./assets/herbs.jpg"
    }, {
      disount: "UP TO 16% OFF",
      title: "Apples",
      gram: "200g+200g+200g",
      price: "₹35",
      image: "./assets/apple.png"
    },
  ];
  constructor() { this.fruits;}

  ngOnInit() { }

}
