import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, TaskFormComponent],
  providers: [TaskService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'task-manager';
}
