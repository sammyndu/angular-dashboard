import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispute-view-item',
  templateUrl: './dispute-view-item.component.html',
  styleUrls: ['./dispute-view-item.component.css']
})
export class DisputeViewItemComponent implements OnInit {

 @Input() title: String = "";
 @Input() value: any;

  constructor() { }

  ngOnInit(): void {
  }

}
