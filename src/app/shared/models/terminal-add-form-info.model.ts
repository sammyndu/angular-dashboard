import { DeviceModel } from "./device-model.model";
import { DeviceType } from "./device-type.model";
import { InstallationStatus } from "./installation-status.model";
import { VaultType } from "./vault-type.model";

export class TerminalAddFormInfo {
  public installationStatus!: InstallationStatus[];
  public deviceModels!: DeviceModel[];
  public deviceTypes!: DeviceType[];
  public vaultTypes!: VaultType[]

}
