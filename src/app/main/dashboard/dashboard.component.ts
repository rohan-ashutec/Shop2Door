import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  fruits = [
    {
      disount: "22% OFF",
      title: "Fruits Vegetables & Baskets",
      gram: "200g+200g+200g",
      price: "₹35",
      cutprice: "₹908",
      image: "./assets/Banana.png"
    }, {
      disount: "40% OFF",
      title: "Fruits",
      gram: "200g+200g+200g",
      price: "₹35",
      cutprice: "₹987",
      image: "./assets/apple.png"
    }, {
      disount: "60% OFF",
      title: "Vegetables",
      gram: "200g+200g+200g",
      price: "₹35",
      cutprice: "₹908",
      image: "./assets/tomato.jpg"
    }, {
      disount: "50% OFF",
      title: "Cut Fresh 7 Herbs",
      gram: "200g+200g+200g",
      price: "₹35",
      cutprice: "₹100",
      image: "./assets/herbs.jpg"
    }, {
      disount: "40% OFF",
      title: "Apples",
      gram: "200g+200g+200g",
      price: "₹35",
      cutprice: "₹50",
      image: "./assets/apple.png"
    }, {
      disount: "25% OFF",
      title: "Apples",
      gram: "200g+200g+200g",
      price: "₹35",
      cutprice: "₹90",
      image: "./assets/herbs.jpg"
    }, {
      disount: "10% OFF",
      title: "Apples",
      gram: "200g+200g+200g",
      price: "₹35",
      cutprice: "₹351",
      image: "./assets/apples.png"
    },
  ];
  images = [
    "./assets/b1.jpg",
    "./assets/b2.jpg",
    "./assets/b3.png",
    "./assets/b4.jpg",
  ];
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
  constructor(private menuController: MenuController, private alertControl: AlertController) { }

  ngOnInit() { }
  openMenu() {
    this.menuController.open();
  }
  async presentAlert() {
    const alert = await this.alertControl.create({
      cssClass: 'my-custom-class',
      header: 'Rate Us',
      message:'How was your experiance of shopping with us?',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: '5 star'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
