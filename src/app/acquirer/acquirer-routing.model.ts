import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth/auth-guard.service';
import { AcquirerListComponent } from './acquirer-list/acquirer-list.component';
const routes: Routes = [
  {
    path: "",
    component: AcquirerListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcquirerRoutingModule {

}
