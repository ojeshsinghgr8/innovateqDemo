export interface SummaryList {
  orders: Summary;
  expenses: Summary;
  revenue: Summary;
  users: Summary;
}

export interface Summary {
  title: string;
  value: number;
  icon: string;
}
