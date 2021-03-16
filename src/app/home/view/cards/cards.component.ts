import { SummaryList } from '../../models';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'home-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  cardData: SummaryList = {
    orders: {
      title: 'Total Orders',
      value: 0,
      icon: 'shopping_cart',
    },
    expenses: {
      title: 'Total Expenses',
      value: 0,
      icon: 'account_balance_wallet',
    },
    revenue: {
      title: 'Total Revenue',
      value: 0,
      icon: 'assessment',
    },
    users: {
      title: 'Total Users',
      value: 0,
      icon: 'person',
    },
  };
  ngOnInit(): void {
    this.homeService.getSummary().subscribe((val) => {
      this.cardData = val;
    });
  }
}
