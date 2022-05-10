import { Injectable } from '@angular/core';
import { Task } from '../shared/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    {id: 1, name: 'Task 1', description: 'essa é a task1', completed: false},
    {id: 2, name: 'Task 2', description: 'essa é a task2', completed: false},
    {id: 3, name: 'Task 3', description: 'essa é a task3', completed: false},
    {id: 4, name: 'Task 4', description: 'essa é a task4', completed: false},
    {id: 5, name: 'Task 5', description: 'essa é a task5', completed: false},
    {id: 6, name: 'Task 6', description: 'essa é a task6', completed: false},
    {id: 7, name: 'Task 7', description: 'essa é a task7', completed: false},
    {id: 8, name: 'Task 8', description: 'essa é a task8', completed: false},
  ]

  constructor() { }

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }


  save(task: Task) {
    if (task.id) {
      const taskArr = this.getById(task.id);
      taskArr.description = task.description;
      taskArr.completed = task.completed;
      taskArr.name = task.name;
    } else {
      let lastId = 0;
      if(this.tasks.length > 0) {
        this.tasks[this.tasks.length -1].id;
      } else {
        task.id = lastId + 1;
      }
      task.completed = false;
      this.tasks.push(task)
    }
  }

  delete(id:number) {
    const taskIndex = this.tasks.findIndex((value) => value.id == id)
    this.tasks.splice(taskIndex, 1)
  }
}
