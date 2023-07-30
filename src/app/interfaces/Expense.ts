export interface Expense {
  expenseId: number;
  userId: number;
  name: string;
  amount: number;
  category: string;
  date: Date;
  createdAt: Date;
}
