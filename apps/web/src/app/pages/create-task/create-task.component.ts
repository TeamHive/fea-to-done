import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TaskService } from '../../../services/tasks.service';
import { Task } from '../../../interfaces/task';
import { Tag } from '../../../interfaces/tag';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'apps/web/src/services/toast.service';
declare var $: any;

@Component({
  selector: 'nxlp-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  task: Task;
  @ViewChild('dueDate') dueDateInput: ElementRef;
  @ViewChild('name') nameInput: ElementRef;
  formattedDate: string;
  remainingTags: Array<Tag>;
  uploadedImage: any;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.task = this.getTask();
    this.formattedDate = this.formatDate();
    this.remainingTags = this.task.tags
      ? this.findTags()
      : this.taskService.tags;
    $('#dueDate').datepicker();
    $('#dueDate').on('change', (e) => {
      // TODO: Find a way to move into a directive. jQuery not registering ng change event
      this.formattedDate = e.target.value;
    });
  }

  findTags(): Array<Tag> {
    return this.taskService.tags.filter((tag) => {
      return !this.task.tags.find((ttag) => ttag.label === tag.label);
    });
  }

  changeTask(action: string) {
    switch (action) {
      case 'update':
        this.checkTask(this.task);
        break;
      case 'delete':
        this.task.id
          ? this.deleteTask(this.task)
          : this.router.navigate(['tasks']);
        break;
    }
  }

  formatDate() {
    const date = new Date(this.task.due);
    return (
      date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
    );
  }

  createTask() {
    const lastId = this.taskService.tasks
      .map((task) => task.id)
      .sort()
      .pop();
    const dateParts = this.formattedDate.split('/');
    this.task.due = +new Date(+dateParts[2], +dateParts[0] - 1, +dateParts[1]);
    const newTask: Task = {
      id: lastId + 1,
      img: this.uploadedImage ? this.uploadedImage : this.task.img,
      title: this.task.title,
      description: this.task.description,
      due: +new Date(this.task.due),
      tags: this.task.tags,
      status,
    };
    this.taskService.createTask(newTask).then(() => {
      this.router.navigate(['tasks']).then(() => {
        this.toast.create('New Task Created', 'var(--color-green-shade)');
      });
    });
  }

  updateTask(task: Task) {
    task.img = this.uploadedImage ? this.uploadedImage : this.task.img;
    const dateParts = this.formattedDate.split('/');
    task.due = +new Date(+dateParts[2], +dateParts[0] - 1, +dateParts[1]);
    this.taskService.updateTask(task).then(() => {
      this.router.navigate(['tasks']).then(() => {
        this.toast.create(task.title + ' Updated', 'var(--color-green-shade)');
      });
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).then(() => {
      this.router.navigate(['tasks']).then(() => {
        this.toast.create(
          task.title + ' Deleted',
          'var(--app-state-color-focus)'
        );
      });
    });
  }

  getTask() {
    let curTask: Task;
    this.route.params.subscribe(
      (params) =>
        (curTask = params.id
          ? this.taskService.tasks.find((task) => task.id === Number(params.id))
          : new Task())
    );
    return curTask;
  }

  checkTask = (task: Task) => {
    if (!task.title) {
      this.renderer.addClass(this.nameInput.nativeElement, 'check');
      this.toast.create('Title is Required', 'var(--app-state-color-danger)');
    } else {
      this.renderer.removeClass(this.nameInput.nativeElement, 'check');
      task.id ? this.updateTask(task) : this.createTask();
    }
  }

  storeThumb(event: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.uploadedImage = reader.result;
    };
    reader.readAsDataURL(event[0]);
  }

  removeTag(tag: Tag) {
    this.task.tags = this.task.tags.filter((ttag) => ttag.label !== tag.label);
    this.remainingTags = this.findTags();
  }

  addTag(tag: Tag) {
    this.task.tags.push(tag);
    this.remainingTags = this.findTags();
  }
}
