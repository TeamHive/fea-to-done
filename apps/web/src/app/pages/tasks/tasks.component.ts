import { Component, OnInit } from '@angular/core';
import { Task } from '../../../interfaces/task';
import { TaskService } from '../../../services/tasks.service';

@Component({
  selector: 'nxlp-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  public tasks: Array<Task>;

  constructor(taskService: TaskService) {
    this.tasks = taskService.tasks.filter(task => task.status !== 'complete');
  }

  ngOnInit(): void {
  }
}
