import { Transaction } from './Transaction';

export interface GroupedTransaction {
  date: string;
  transactions: Transaction[];
}
