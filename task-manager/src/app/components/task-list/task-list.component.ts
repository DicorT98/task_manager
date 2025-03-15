import { Component } from '@angular/core';
import { Task } from '../../models/task.interface';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks: Task[] = [];
  filterType: 'all' | 'pending' | 'completed' = 'all'; // Filtro actual
  editingTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  toggleCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  startEditing(task: Task): void {
    this.editingTask = { ...task };
  }

  saveEdit(): void {
    if (this.editingTask) {
      this.taskService.updateTask(this.editingTask);
      this.editingTask = null;
    }
  }

  cancelEdit(): void {
    this.editingTask = null;
  }

  get filteredTasks(): Task[] {
    if (this.filterType === 'pending') {
      return this.tasks.filter((task) => !task.completed);
    } else if (this.filterType === 'completed') {
      return this.tasks.filter((task) => task.completed);
    }
    return this.tasks;
  }
}
