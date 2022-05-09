import { Injectable } from '@angular/core';
import { Task } from '../shared/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = []

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
        this.tasks[this.tasks.length].id;
      }
      task.id = lastId + 1;
      task.completed = false;
      this.tasks.push(task)
    }
  }

  delete(id:number) {
    const taskIndex = this.tasks.findIndex((value) => value.id == id)
    this.tasks.splice(taskIndex, 1)
  }
}
