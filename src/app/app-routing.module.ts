import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './shared/services/auth/auth-guard.service';

const routes: Routes = [
    { path: '',

      component: HomeComponent,

      canActivate: [AuthGuardService],

      children: [
        { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent }
      ]
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule',
        canActivate: [AuthGuardService],
    },
    {
      path: 'transaction',
      loadChildren: './transaction/transaction.module#TransactionModule',
      canActivate: [AuthGuardService],
    },
    {
      path: 'terminal',
      loadChildren: './terminal/terminal.module#TerminalModule',
      canActivate: [AuthGuardService],
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
