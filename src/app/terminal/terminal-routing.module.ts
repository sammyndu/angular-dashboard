import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth/auth-guard.service';
import { TerminalsComponent } from './terminals/terminals.component';

const routes: Routes = [
  {
    path : '',

    component :  TerminalsComponent,
    //
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminalRoutingModule {

}
