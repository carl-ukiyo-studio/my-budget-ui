import {
  Component,
  computed,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { IncomeCardComponent } from './income-card/income-card.component';
import { ExpenseCardComponent } from './expense-card/expense-card.component';
import { Transaction } from '../../models/Transaction';
import { TransactionCardComponent } from './transaction-card/transaction-card.component';
import { GroupedTransaction } from '../../models/GroupedTransaction';
import { TransactionService } from './transactions-service.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    IncomeCardComponent,
    ExpenseCardComponent,
    TransactionCardComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactionService = inject(TransactionService);

  transactions: WritableSignal<Transaction[]> = signal([]);
  income: Signal<Transaction[]> = computed(() =>
    this.transactions().filter((t) => t.type === 'income'),
  );
  expenses: Signal<Transaction[]> = computed(() =>
    this.transactions().filter((t) => t.type === 'expense'),
  );

  groupedTransactions: Signal<GroupedTransaction[]> = computed(() => {
    return this.groupTransactionsByDate();
  });
  selectedDate: WritableSignal<string> = signal('');

  ngOnInit() {
    this.transactions.set(this.transactionService.getTransactions());
  }

  groupTransactionsByDate() {
    const groupedTransactions: GroupedTransaction[] = [];
    const uniqueDates = new Set(
      this.transactions().map((transaction) => transaction.date),
    );

    uniqueDates.forEach((date) => {
      const transactionsForDate = this.transactions().filter(
        (transaction) => transaction.date === date,
      );
      groupedTransactions.push({ date, transactions: transactionsForDate });
    });

    return groupedTransactions;
  }
}
