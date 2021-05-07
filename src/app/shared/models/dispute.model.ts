import { DisputeStatus } from "./dispute-status.model"
import { DisputeType } from "./dispute-type"

export class Dispute {
  public id!: number
  public terminalId!: number
  public stan!: string
  public disputeDate!: Date
  public transactionCode!: string
  public panBin!: string
  public panLastFourDigit!: string
  public amount!: number
  public currencyCode!: string
  public currencyName!: string
  public referenceNumber!: string
  public authorizationNumber!: string
  public disputeTypeId!: number
  public disputeStatusId!: number
  public statusId!: number
  public description!: string
  public status!: boolean
  public visible!: boolean
  public verified!: boolean
  public dateCreated!: Date
  public lastModified!: Date
  public createdBy!: string
  public modifiedBy!: string
  public enable!: boolean
  public senderPhoneNumber!: string
  public receiverAccountNumber!: string

  public disputeStatus!: DisputeStatus
  public disputeType!: DisputeType
}
