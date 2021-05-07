import { Component, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent implements OnInit, OnDestroy {
  @ViewChild('modal')
  private modal!: ModalDirective;

  @Input() title = '[Title goes here]';

  @Input() closable = true;

  @Input() size = 'medium';

  @Input() icon = '';

  @ViewChild('container', { read: ViewContainerRef })
  public containter!: ViewContainerRef;

  private _viewRef!: ViewRef;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  show(): void {
    this.modal.show();
  }

  close(): void {
    this.modal.hide();
    this.modalService.closeModal();
  }

  ngOnDestroy(): void {

  }





}
