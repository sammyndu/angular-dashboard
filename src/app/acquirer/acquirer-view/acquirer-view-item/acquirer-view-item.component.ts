import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acquirer-view-item',
  templateUrl: './acquirer-view-item.component.html',
  styleUrls: ['./acquirer-view-item.component.css']
})
export class AcquirerViewItemComponent implements OnInit {

  @Input() leftTitle : string = ""
  @Input() leftValue : any

  @Input() rightTitle : string = ""
  @Input() rightValue : any


  constructor() { }

  ngOnInit(): void {
  }

}
