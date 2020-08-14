import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  cards = [
    {
      image:"./assets/pixel3.jpeg",
      title: "Month End Savers | 22 - 28 Feb",
      subtitle: "Get Rs.150 discount on your favourites Products",
      code: " SAVE150",
      amount: "Rs.1800"
    }, {
      image:"./assets/pixel3.jpeg",
      title: "Monsoon Savers | 19-24 June",
      subtitle: "Rs.125 cashback for Smart Bachat Club Members only",
      code: "SAVE125",
      amount: "Rs.1000"
    },
    {
      image:"./assets/pixel2.jpeg",
      title: "Special Offer | 5-8 March",
      subtitle: "Rs.65 cashback",
      code: "SAVE65",
      amount: "Rs.1000"
    }, {
      image:"./assets/pixel1.jpeg",
      title: "Flsy 20% cashback on your 1st order | 5-8 March",
      subtitle: "Get up to Rs.250 cashback",
      code: "SAVE65",
      amount: "Rs.500"
    }
  ]
  constructor() { }

  ngOnInit() { }

}
