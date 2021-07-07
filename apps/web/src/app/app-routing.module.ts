import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskComponent } from './pages/task/task.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';

const routes: Routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    { path: 'tasks', component: TasksComponent },
    { path: 'task/:id', component: TaskComponent}, // title provided through EventEmitter
    { path: 'edit/:id', component: CreateTaskComponent, data: {title: "Add Task"}},
    { path: 'create', component: CreateTaskComponent, data: {title: "Add Task"}},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
