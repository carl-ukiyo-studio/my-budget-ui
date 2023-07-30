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
  selectedDate: WritableSignal<string> = signal('');
  selectedMonth: WritableSignal<string> = signal('');
  income: Signal<Transaction[]> = computed(() =>
    this.transactions().filter((t) => t.type === 'income'),
  );
  filteredIncome: Signal<Transaction[]> = computed(() => {
    // return this.selectedDate
    //   ? this.income().filter((income) => income.date === this.selectedDate())
    //   : this.income();
    return this.selectedMonth()
      ? this.income().filter((income) => income.date === this.selectedMonth())
      : this.income();
  });
  expenses: Signal<Transaction[]> = computed(() =>
    this.transactions().filter((t) => t.type === 'expense'),
  );
  filteredExpenses: Signal<Transaction[]> = computed(() => {
    // return this.selectedDate
    //   ? this.expenses().filter(
    //       (expense) => expense.date === this.selectedDate(),
    //     )
    //   : this.expenses();
    return this.selectedMonth()
      ? this.expenses().filter(
          (expense) => expense.date === this.selectedMonth(),
        )
      : this.expenses();
  });

  groupedTransactions: Signal<GroupedTransaction[]> = computed(() => {
    return this.groupTransactionsByDate();
  });

  filteredGroupedTransactions: Signal<GroupedTransaction[]> = computed(() => {
    // return this.selectedDate
    //   ? this.groupedTransactions().filter(
    //       (group) => group.date === this.selectedDate(),
    //     )
    //   : this.groupedTransactions();
    return this.selectedMonth()
      ? this.groupedTransactions().filter((group) =>
          group.date.startsWith(this.selectedMonth()),
        )
      : this.groupedTransactions();
  });

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

  onDateChange(event: any) {
    this.selectedDate.set(event.target.value);
  }

  onMonthChange(event: any) {
    this.selectedMonth.set(event.target.value);
  }
}
