export class Terminal {
    public id: number = 0;
    public currencyCode: string = "";
    public serialNumber: string = "";
    public version: string = "";
    public settlementTime: string = "";
    public owner: string = "";
    public visible: boolean =  false;
    public verified: boolean = false;
    public dateCreated: Date = new Date();
    public lastModified: Date =  new Date();
    public createdBy: string = "";
    public modifiedBy: string = "";
    public enabled: boolean =  false;
    public bank: string = "";
    public terminalRef: string = "";
    public terminalName: string = "";
    public terminalAlias: string = "";
    public description: string = "";
    public hostIpAddress: string = "";
    public hostPort: string = "";
    public passphrase: string = "";
    public ipAddress: string = "";
    public macAddress: string = "";
    public publicId: string = "";
    public publicKey: string = "";
    public machineId: string = "";
    public portNumber: string = "";
    public appVersion: string = "";
    public logOnToHost: boolean = false;

        // public ICollection<CIMStatu> CIMStatus { get; set; }
        // public ICollection<Models.CashUnitInfo> CashUnitInfoes { get; set; }
}