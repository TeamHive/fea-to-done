import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../interfaces/tag';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskId = 0;
  tasks: Array<Task>;
  tags: Array<Tag> = [
    { label: 'Work', color: 'purple' },
    { label: 'Important', color: 'orange' },
    { label: 'Family', color: 'green' },
    { label: 'Personal', color: 'blue' },
  ];
  demoTasks: Array<Task> = [
    {
      id: 1,
      title: 'A Test',
      tags: [this.tags[0], this.tags[1]],
      description: 'Testing testing testing!',
      due: Date.now(),
      status,
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.tasks = this.getTasks();
  }

  getTasks() {
    //   let tasks;
    const tasks = JSON.parse(window.localStorage.getItem('tasks'));
    if (!tasks)
      window.localStorage.setItem('tasks', JSON.stringify(this.demoTasks));
    return tasks ? tasks : this.demoTasks;
  }

  async createTask(newTask: Task) {
    this.tasks.push(newTask);
    window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  async updateTask(newTask: Task) {
    const oldTask = this.tasks.findIndex(task => task.id === newTask.id);
    this.tasks.splice(oldTask, 1, newTask);
    window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  async deleteTask(task: Task) {
    const delIndex = this.tasks.findIndex(ogTask => task.id === ogTask.id);
    this.tasks.splice(delIndex, 1);
    window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
