import { TransactionDetail } from "./transaction-detail.model";

export class TransactionSearchQuery extends TransactionDetail {
  public dateFrom: Date | null = null;
  public dateTo: Date | null = null;
}
