import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  constructor() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
      this.tasksSubject.next(this.tasks);
    }
  }

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.updateStorage();
  }

  toggleTaskCompletion(id: number): void {
    this.tasks = this.tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
    this.updateStorage();
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.updateStorage();
  }

  updateTask(updatedTask: Task): void {
    this.tasks = this.tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    this.updateStorage();
  }
  
  private updateStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.tasksSubject.next(this.tasks);
  }
}
