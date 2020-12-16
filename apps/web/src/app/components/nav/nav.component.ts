import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nxlp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    baseUrl: string;
    taskId: number;
    @Input() position: string;
    @Input() status: string;
    @Output() ping: EventEmitter<string> = new EventEmitter<string>();

  constructor(
      private router: Router
  ) {
  }

  ngOnInit(): void {
    this.baseUrl = window.location.pathname.split('/')[1];
    this.taskId = Number(window.location.pathname.split('/').pop());
  }

  deleteTask() {
      this.ping.emit('delete');
  }

  updateTask() {
      this.ping.emit('update');
  }

  completeTask() {
      this.ping.emit();
  }

  editTask() {
    this.router.navigate(['edit', this.taskId]);
  }

  addTask() {
      this.router.navigateByUrl('/create');
  }

}
