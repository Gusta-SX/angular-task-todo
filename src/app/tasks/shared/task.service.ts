import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, name: 'Task 1', description: 'essa é a tarefa número 1', completed: false},
    { id: 2, name: 'Task 2',  description: 'essa é a tarefa número 2', completed: false},
    { id: 3, name: 'Task 3',  description: 'essa é a tarefa número 3', completed: false},
    { id: 4, name: 'Task 4',  description: 'essa é a tarefa número 4', completed: false},
    { id: 5, name: 'Task 5',  description: 'essa é a tarefa número 5', completed: false},
    { id: 6, name: 'Task 6',  description: 'essa é a tarefa número 6', completed: false},
    { id: 7, name: 'Task 7',  description: 'essa é a tarefa número 7', completed: false},
    { id: 8, name: 'Task 8',  description: 'essa é a tarefa número 8', completed: false},
    { id: 9, name: 'Task 9',  description: 'essa é a tarefa número 9', completed: false},
    { id: 10, name: 'Task 10',  description: 'essa é a tarefa número 10', completed: false},
  ]

  constructor() { }

  getAll() {
    return this.tasks;
  }
}
