import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/**
 * PAGES
 */

import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskComponent } from './pages/task/task.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';

/**
 * COMPONENTS
 */

import { ButtonComponent } from './components/button/button.component';
import { NavComponent } from './components/nav/nav.component';
import { ToastComponent } from './components/toast/toast.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    CreateTaskComponent,
    ButtonComponent,
    NavComponent,
    ToastComponent,
    UploaderComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
