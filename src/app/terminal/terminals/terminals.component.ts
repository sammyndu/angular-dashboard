import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Terminal } from 'src/app/shared/models/terminal.model';
import { TerminalService } from 'src/app/shared/services/terminal.service';

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['./terminals.component.css']
})
export class TerminalsComponent implements OnInit {

  terminals: Terminal[] = []

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private terminalService: TerminalService) { }

  ngOnInit(): void {
    this.getTerminals();
  }

  getTerminals() {
    this.terminalService.getTerminals().subscribe((result) => {
      console.log(result);
      this.terminals = result;
      this.dtTrigger.next();
    })
  }

}
