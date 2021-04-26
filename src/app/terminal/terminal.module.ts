import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalsComponent } from './terminals/terminals.component';
import { TerminalRoutingModule } from './terminal-routing.module';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [TerminalsComponent],
  imports: [
    CommonModule,
    TerminalRoutingModule,
    DataTablesModule,
  ]
})
export class TerminalModule { }
