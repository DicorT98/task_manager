import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent {
  title = '';
  description = '';
  errorMessage = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (!this.title.trim()) {
      this.errorMessage = 'El título no puede estar vacío';
      return;
    }
    if (!this.description.trim()) {
      this.errorMessage = 'La descripción no puede estar vacía';
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: this.title,
      description: this.description,
      completed: false,
    };
    this.taskService.addTask(newTask);
    this.title = '';
    this.description = '';
    this.errorMessage = '';
  }
}
