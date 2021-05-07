import { formatDate } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-view-item',
  templateUrl: './component-view-item.component.html',
  styleUrls: ['./component-view-item.component.css']
})
export class ComponentViewItemComponent implements OnInit, OnChanges {

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
