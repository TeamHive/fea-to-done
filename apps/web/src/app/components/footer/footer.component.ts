import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../../interfaces/task';

@Component({
  selector: 'nxlp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    appTitle = "To Done";
    pageTitle = "";
    status: string;
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
