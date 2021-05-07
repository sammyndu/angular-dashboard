import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { TokenInterceptor } from './shared/utils/token-interceptor';
import { DataTablesModule } from 'angular-datatables';
import { TransactionModule } from './transaction/transaction.module';
import { TerminalModule } from './terminal/terminal.module';
import { AdminModule } from './admin/admin.module';
import { DeviceModule } from './device/device.module';
import { AcquirerModule } from './acquirer/acquirer.module';
import { DisputeModule } from './dispute/dispute.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SideMenuComponent
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    BrowserAnimationsModule,
    DataTablesModule,
    TransactionModule,
    TerminalModule,
    AdminModule,
    DeviceModule,
    AcquirerModule,
    DisputeModule,
    NgxSkeletonLoaderModule,
    TooltipModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
