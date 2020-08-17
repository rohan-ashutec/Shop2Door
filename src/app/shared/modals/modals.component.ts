import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})
export class ModalsComponent implements OnInit {
  id: Number;
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.";
  title: String;
  shipping = [
    {
      title: "How log does shipping take?",
    }, {
      title: "How can I track my order?",
    }, {
      title: "How much does shipping cost?",
    }, {
      title: "Where does my order ship from?",
    }, {
      title: "How do I change my shipping address?",
    }
  ];
  returns = [
    {
      title: "How do I return a product?",
    }, {
      title: "Can I exchange an item??",
    }, {
      title: "How do I cancel my order?",
    }, {
      title: "What's the status of my refund?",
    }, {
      title: "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?",
    }, {
      title: "I cancelled my order. How will I receive my refund?",
    }
  ];
  payments = [
    {
      title: "How do I return a product?",
    }, {
      title: "Can I exchange an item??",
    }, {
      title: "How do I cancel my order?",
    }, {
      title: "What's the status of my refund?",
    }, {
      title: "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?",
    }, {
      title: "I cancelled my order. How will I receive my refund?",
    }
  ];
  orders = [
    {
      title: "What's the status of my refund?",
    }, {
      title: "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?",
    }, {
      title: "I cancelled my order. How will I receive my refund?",
    }, {
      title: "What's the status of my refund?",
    }, {
      title: "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?",
    }, {
      title: "I cancelled my order. How will I receive my refund?",
    }
  ];
  managing = [
    {
      title: "What's the status of my refund?",
    }, {
      title: "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?",
    }, {
      title: "I cancelled my order. How will I receive my refund?",
    }, {
      title: "What's the status of my refund?",
    }, {
      title: "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?",
    }, {
      title: "I cancelled my order. How will I receive my refund?",
    }
  ];
  user = [
    {
      title: "What's the status of my refund?",
    }, {
      title: "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?",
    }, {
      title: "I cancelled my order. How will I receive my refund?",
    }, {
      title: "What's the status of my refund?",
    }, {
      title: "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?",
    }, {
      title: "I cancelled my order. How will I receive my refund?",
    }
  ];
  customer = [
    {
      title: "What's the status of my refund?",
    }, {
      title: "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?",
    }, {
      title: "I cancelled my order. How will I receive my refund?",
    }, {
      title: "What's the status of my refund?",
    }, {
      title: "Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?",
    }, {
      title: "I cancelled my order. How will I receive my refund?",
    }
  ];

  cards: any[];
  constructor(params: NavParams, private modalCtrl: ModalController) {
    this.id = params.get('id')
    console.log(this.id)
  }
  ionViewDidEnter() {

    if (this.id == 1) {
      this.cards = this.shipping
      this.title = "Shipping and Delivery";
      
    } else if (this.id == 2) {
      this.title = "Returns and Refunds";
      this.cards = this.returns
      
    } else if (this.id == 3) {
      this.title = "Payment, Pricing & Promotions";
      this.cards = this.payments
      
    } else if (this.id == 4) {
      this.title = "Orders";
      this.cards = this.orders
      
    } else if (this.id == 5) {
      this.title = "Managing Your Account";
      this.cards = this.managing
      
    } else if (this.id == 6) {
      this.title = "User Feedback";
      this.cards = this.user
      
    } else {
      this.title = "Customer Support";
      this.cards = this.customer
      
    }

  }
  close() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {

  }
}
