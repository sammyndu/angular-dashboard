import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalsComponent } from './terminals/terminals.component';
import { TerminalRoutingModule } from './terminal-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { TerminalCreateComponent } from './terminal-create/terminal-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TerminalsComponent, TerminalCreateComponent],
  imports: [
    CommonModule,
    TerminalRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class TerminalModule { }
