import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth/auth-guard.service';
import { ComponentListComponent } from './component/component-list/component-list.component';
import { ModelListComponent } from './model/model-list/model-list.component';
import { TypeListComponent } from './type/type-list/type-list.component';

const routes: Routes = [
  {
    path: "components",
    component: ComponentListComponent
  },
  {
    path: "models",
    component: ModelListComponent
  },
  {
    path: "types",
    component: TypeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule {}
