import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../../interfaces/task';

@Component({
  selector: 'nxlp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    appTitle = "To Done";
    pageTitle = "";
    status: string;
    @Input() position;
    @Input() task: Task;
    @Output() changeTask:EventEmitter<string> = new EventEmitter<string>();

  constructor(
      private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
        if(this.task) {
            this.pageTitle = data.title ? data.title : this.task.title;
            this.status = this.task.status;
        }
    });
    
  }

  ping(command: string) {
    this.changeTask.emit(command);
  }

}
