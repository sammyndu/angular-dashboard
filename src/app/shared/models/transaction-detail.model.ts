import { Denomination } from "./denomination.model";

export class TransactionDetail{
    public acquirerId: number = 0
    public denCount: number = 0
    public transStatus: string = "";
    public posted: string = "";
    public bankName: string = "";
    public description: string = "";
    public paymentType: string = "";
    public denominationList: Denomination[] = []
    public id: number = 0
    public terminalId: string = "";
    public amount: number = 0;
    public dateCreate : Date | null = null
    public depositor: string = "";
    public destinationAccNo: string = "";
    public narration: string = "";
    public destinationBankCode: string = "";
    public transactionType: string = "";
    public transactionRef: string = "";
    public transDateTime: Date | null = null
    public dateTimeIsPosted: Date | null = null
    public amt: string = "";
    public terminalRef: string = "";
    public terminalAlias: string = "";
    public terminalIp: string = "";
}
