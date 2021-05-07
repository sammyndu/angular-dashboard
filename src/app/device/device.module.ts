import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceRoutingModule } from './device-routing.module';
import { ComponentListComponent } from './component/component-list/component-list.component';
import { DataTablesModule } from 'angular-datatables';
import { ModelListComponent } from './model/model-list/model-list.component';
import { TypeListComponent } from './type/type-list/type-list.component';
import { ComponentCreateEditComponent } from './component/component-create-edit/component-create-edit.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ComponentViewComponent } from './component/component-view/component-view.component';
import { ComponentViewItemComponent } from './component/component-view/component-view-item/component-view-item.component';
import { ModelViewComponent } from './model/model-view/model-view.component';
import { ModelViewItemComponent } from './model/model-view/model-view-item/model-view-item.component';
import { ModelCreateEditComponent } from './model/model-create-edit/model-create-edit.component';
import { TypeCreateEditComponent } from './type/type-create-edit/type-create-edit.component';
import { TypeViewComponent } from './type/type-view/type-view.component';
import { TypeViewItemComponent } from './type/type-view/type-view-item/type-view-item.component';



@NgModule({
  declarations: [
    ComponentListComponent,
    ModelListComponent,
    ModelViewComponent,
    ModelViewItemComponent,
    ModelCreateEditComponent,
    TypeListComponent,
    ComponentCreateEditComponent,
    ComponentViewComponent,
    ComponentViewItemComponent,
    TypeCreateEditComponent,
    TypeViewComponent,
    TypeViewItemComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    DataTablesModule,
    SharedModule,
    FormsModule
  ]
})
export class DeviceModule { }
