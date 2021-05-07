import { formatDate } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-type-view-item',
  templateUrl: './type-view-item.component.html',
  styleUrls: ['./type-view-item.component.css']
})
export class TypeViewItemComponent implements OnInit {

  @Input() leftTitle = ""
  @Input() leftValue: any
  @Input() rightTitle = ""
  @Input() rightValue: any

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    if(this.leftTitle.includes("Date")) {
      console.log("here");
      this.leftValue = this.convertDate(this.leftValue)
    }

    if(this.rightTitle.includes("Date")) {
      this.rightValue = this.convertDate(this.rightValue)
    }
  }

  ngOnInit(): void {

  }

  convertDate(date: Date | string) {
    if(date != null) {
      return formatDate(date, 'medium',  "en-US");
    }
    return date;
  }

}
