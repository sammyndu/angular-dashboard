import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalsComponent } from './terminals/terminals.component';
import { TerminalRoutingModule } from './terminal-routing.module';



@NgModule({
  declarations: [TerminalsComponent],
  imports: [
    CommonModule,
    TerminalRoutingModule
  ]
})
export class TerminalModule { }
