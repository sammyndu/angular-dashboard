export class DeviceModel {
  public id!: number
  public deviceTypeId!: number | null
  public shortName!: string
  public deviceName!: string
  public description!: string
  public manufacturer!: string
  public dateAdded!: Date | null
  public dateModified!: Date | null

  //public virtual DeviceType DeviceType
}
