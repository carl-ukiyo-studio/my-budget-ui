import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactions = [
    {
      id: 't1',
      amount: -100,
      description: 'Online purchase',
      date: '2023-07-29',
      category: 'Shopping',
      image: 'https://cdn-icons-png.flaticon.com/128/781/781760.png',
      note: '123',
      type: 'expense',
    },
    {
      id: 't2',
      amount: -50,
      description: 'Lunch with friends',
      date: '2023-07-28',
      category: 'Food',
      note: '456',
      image: 'https://cdn-icons-png.flaticon.com/128/781/781760.png',
      type: 'expense',
    },
    {
      id: 't3',
      amount: 200,
      description: 'Monthly salary',
      date: '2023-07-25',
      category: 'Income',
      note: '',
      image: 'https://cdn-icons-png.flaticon.com/128/781/781760.png',
      type: 'income',
    },
    {
      id: 't4',
      amount: -75,
      description: 'Coffee with colleagues',
      date: '2023-07-28',
      category: 'Food',
      note: '789',
      image: 'https://cdn-icons-png.flaticon.com/128/781/781760.png',
      type: 'expense',
    },
    {
      id: 't5',
      amount: -120,
      description: 'Electric bill',
      date: '2023-07-29',
      category: 'Utilities',
      note: '456',
      image: 'https://cdn-icons-png.flaticon.com/128/781/781760.png',
      type: 'expense',
    },
    {
      id: 't6',
      amount: 250,
      description: 'Freelance project',
      date: '2023-07-25',
      category: 'Income',
      note: 'Payment received',
      image: 'https://cdn-icons-png.flaticon.com/128/781/781760.png',
      type: 'income',
    },
  ];

  constructor() {}

  // Function to get the list of transactions
  getTransactions() {
    return this.transactions.slice(); // Return a copy of the transactions array
  }

  // Function to generate more transactions with the same date
  generateMoreTransactions() {
    // Generate more transactions with the same date (2023-07-29)
    for (let i = 0; i < 3; i++) {
      const newTransaction = {
        id: `t${i + 4}`,
        amount: Math.floor(Math.random() * 50) + 20,
        description: `Expense ${i + 1}`,
        date: '2023-07-29',
        category: 'Miscellaneous',
        image: 'https://cdn-icons-png.flaticon.com/128/781/781760.png',
        note: `Note for expense ${i + 1}`,
        type: 'expense',
      };
      this.transactions.push(newTransaction);
    }
  }
}
