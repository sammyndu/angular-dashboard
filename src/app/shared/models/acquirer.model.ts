export class Acquirer {
  public id!: number
  public acquirerShortName!: string
  public acquirerFullName!: string
  public acquirerCode!: string
  public emailSuffix!: string
  public contactFirstName!: string
  public contactLastName!: string
  public contactEmail!: string
  public contactPhone!: string
  public escalationEmail!: string
  public escalationPhoneNo!: string
  public addressLine1!: string
  public addressLine2!: string
  public city!: string
  public state!: string
  public long!: number
  public lat!: number
  public capacity!: number
  public isBank: boolean = false
  public description!: string
  public dateCreated!: Date
  public dateModified!: Date
  public createdBy!: string
}
