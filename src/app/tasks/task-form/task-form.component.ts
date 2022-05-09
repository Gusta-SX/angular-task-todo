import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../shared/task.service';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})

export class TaskFormComponent implements OnInit {
  title: string = 'Nova Tarefa';
  task: Task = new Task();

  constructor (
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.task = this.taskService.getById(parseInt(id));
      this.title = 'Alterando tarefa';
    }
    console.log(this.task)
  }

  onSubmit() {
    this.taskService.save(this.task);
    this.router.navigate(['']);
  }

}
