import { TerminalStatus } from "./terminal-status.model";
import { Terminal } from "./terminal.model";
import { TransactionChart } from "./transaction-chart.model";
import { UnsolicitedMessage } from "./unsolicited-message.model";

export class Dashboard {
    // constructor(totalTerminalCount = 0, onlineTerminalCount = 0, offlineTerminalCount = 0) {
    //     this.totalTerminalCount = totalTerminalCount;
    //     this.onlineTerminalCount = onlineTerminalCount;
    //     this.offlineTerminalCount = offlineTerminalCount;
    // }
    public totalTerminalCount: number = 0;
    public onlineTerminalCount: number = 0;
    public offlineTerminalCount: number = 0;
    public transactionChartData: TransactionChart[] = [];
    public terminalStatus: TerminalStatus[] = [];
    public terminals: Terminal[] = [];
    public unsolicitedMessages : UnsolicitedMessage[] = []

}