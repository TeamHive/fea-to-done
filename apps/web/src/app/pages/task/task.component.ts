import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../../interfaces/task';
import { TaskService } from '../../../services/tasks.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'nxlp-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Output() titleChange = new EventEmitter<string>();

  task: Task;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.task = this.getTask();
    this.emitTitle();
  }

  getTask = () => {
      const taskId = Number(window.location.pathname.split('/').pop());
        return this.taskService.tasks.find(task => taskId === task.id);
  }

  emitTitle() {
      this.titleChange.emit(this.task.title);
  }

  completeTask() {
    // this.taskService.updateTask({...this.task, status: 'complete'});
    this.router.navigate(['/tasks']).then(() => {
        this.toast.create(this.task.title + ' Completed', 'var(--color-green-shade)');
    })
  }
}
