import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalsComponent } from '../modals/modals.component';

@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.scss'],
})
export class NeedHelpComponent implements OnInit {
  cards = [
    {
      title: "Shipping and Delivery",
      id: 1
    }, {
      title: "Returns and Refunds",
      id: 2
    }, {
      title: "Payment, Pricing & Promotions",
      id: 3
    }, {
      title: "Orders",
      id: 4
    }, {
      title: "Managing Your Account",
      id: 5
    }, {
      title: "User Feedback",
      id: 6
    }, {
      title: "Customer Support",
      id: 7
    },
  ];
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() { this.cards; }
  async presentProfileModal(id) {
    const modal = await this.modalCtrl.create({
      component: ModalsComponent,
      componentProps: { id: id }
    });
    return await modal.present();
  }
}
