import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent implements OnInit {
  @ViewChild('modal')
  private modal!: ModalDirective;

  @Input() title = '[Title goes here]';

  @Input() closable = true;

  @Input() size = 'medium';

  @Input() icon = '';

  constructor() { }

  ngOnInit() {
  }

  show(): void {
    this.modal.show();
  }

  close(): void {
    this.modal.hide();
  }


}
