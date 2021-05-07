import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Modal } from '../models/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public message = new Subject<Modal>();
  public closed = new Subject<Modal>();

  //public modal = new Modal

  constructor() { }

  openModal(modal: Modal) {
    this.message.next(modal);
  }

  closeModal() {
    this.closed.next();
  }

}
