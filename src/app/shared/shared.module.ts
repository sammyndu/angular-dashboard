import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ToastService } from './services/toast.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { SessionService } from './services/session.service';
import { DashboardService } from './services/dashboard.service';
import { TokenInterceptor } from './utils/token-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DialogModalComponent } from './widgets/dialog-modal/dialog-modal.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [DialogModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    })
  ],
  exports: [
    DialogModalComponent
  ],
  providers: [
    ToastService,
    AuthGuardService,
    AuthService,
    SessionService,
    DashboardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ]
})
export class SharedModule { }
