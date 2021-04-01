export class UnsolicitedMessage {
    public Id: number = 0;
    public AcquirerId: number|null = null;
    public TerminalId: string = "";
    public UserInfo: string = "";
    public OriginIp: string = "";
    public DestinationIp: string = "";
    public Message: string = "";
    public MessageType: string = "";
    public MessageDescription: string = "";
    public EventName: string = "";
    public EventDate: Date | null = null;
    public Status: boolean = false;
    public DateCreated: Date = new Date;
    public Comment: string = "";
}