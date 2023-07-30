import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Transaction } from '../../../models/Transaction';
import { NumberWithSignPipe } from '../../../pipes/number-with-sign.pipe';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, NumberWithSignPipe],
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss'],
})
export class TransactionCardComponent {
  @Input() transaction: Transaction = {} as any;
}
