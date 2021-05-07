import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisputeRoutingModule } from './dispute-routing.module';
import { DisputeListComponent } from './dispute-list/dispute-list.component';
import { DataTablesModule } from 'angular-datatables';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DisputeViewComponent } from './dispute-view/dispute-view.component';
import { SharedModule } from '../shared/shared.module';
import { DisputeViewItemComponent } from './dispute-view/dispute-view-item/dispute-view-item.component';
import { DisputeCreateEditComponent } from './dispute-create-edit/dispute-create-edit.component';
import { FormsModule } from '@angular/forms';
import { FormFieldComponent } from './dispute-create-edit/form-field/form-field.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [DisputeListComponent, DisputeViewComponent, DisputeViewItemComponent, DisputeCreateEditComponent, FormFieldComponent],
  imports: [
    CommonModule,
    DisputeRoutingModule,
     DataTablesModule,
     SharedModule,
     FormsModule,
     NgxSkeletonLoaderModule,
     TooltipModule.forRoot()
  ]
})
export class DisputeModule { }
