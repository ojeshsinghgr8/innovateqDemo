import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor() {}
  cardData = {
    orders: {
      title: 'Total Orders',
      value: 345,
      icon: 'shopping_cart',
    },
    expenses: {
      title: 'Total Expenses',
      value: 267,
      icon: 'account_balance_wallet',
    },

    revenue: {
      title: 'Total Revenue',
      value: 267,
      icon: 'assessment',
    },
    users: {
      title: 'Total Users',
      value: 267,
      icon: 'person',
    },
  };
  ngOnInit(): void {}
}
