export interface Transaction {
  id: string,
  amount: number,
  description: string;
  date: string;
  category: string;
  note: string;
  image?: string;
  type: string;
}
