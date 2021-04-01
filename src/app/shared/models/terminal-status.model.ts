import { Terminal } from "./terminal.model";

export class TerminalStatus {
    public Id: number = 0;
    public TerminalId: number = 0;
    public Description: string = "";
    public MessageId: string = "";
    public Status: string = "";
    public DateCreated: Date = new Date();
    public LastModified: Date = new Date();
    public CreatedBy: string = "";
    public ModifiedBy: string = "";

    public Terminal: Terminal =  new Terminal;
}