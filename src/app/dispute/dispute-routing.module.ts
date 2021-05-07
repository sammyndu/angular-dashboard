import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth/auth-guard.service';
import { DisputeListComponent } from './dispute-list/dispute-list.component';

const routes: Routes = [
  {
    path: "",
    component: DisputeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisputeRoutingModule {}
