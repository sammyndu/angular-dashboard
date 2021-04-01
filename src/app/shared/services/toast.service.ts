import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
declare const $: any;

@Injectable()
export class ToastService {
    constructor(public _toasterService: ToastrService) { }

    showError(message: string, title?: string) {
        this._toasterService.error(message, title);
        // $.toast({
        //     heading: title,
        //     text: message,
        //     position: 'top-right',
        //     loaderBg:'#ff6849',
        //     icon: 'error',
        //     hideAfter: 5000    
        //   });
    }

    showInfo(message: string, title?: string) {
        this._toasterService.info(message, title);
        // $.toast({
        //     heading: title,
        //     text: message,
        //     position: 'top-right',
        //     loaderBg:'#ff6849',
        //     icon: 'info',
        //     hideAfter: 3500, 
        //     stack: 6
        //   });
    }

    showWarning(message: string, title?: string) {
        this._toasterService.warning(message, title);
        // $.toast({
        //     heading: title,
        //     text: message,
        //     position: 'top-right',
        //     loaderBg:'#ff6849',
        //     icon: 'warning',
        //     hideAfter: 3500, 
        //     stack: 6
        //   });
    }

    showSuccess(message: string, title?: string) {
        this._toasterService.success(message, title);
        // $.toast({
        //     heading: title,
        //     text: message,
        //     position: 'top-right',
        //     loaderBg:'#ff6849',
        //     icon: 'success',
        //     hideAfter: 5000, 
        //     stack: 6
        //   });
    }

}
