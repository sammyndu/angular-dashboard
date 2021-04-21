import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth/auth-guard.service';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path : 'history',

    component :  HistoryComponent,
    //
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule {

}
