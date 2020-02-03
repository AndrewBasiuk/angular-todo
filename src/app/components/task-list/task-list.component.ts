import { Component, OnInit } from '@angular/core';
import { TaskItem } from 'src/app/models/TaskItem';
import { AddService } from 'src/app/services/add.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  list: TaskItem[];


  constructor(public addService: AddService) { }

  getTask(): void {
    this.list = this.addService.getTaskList();
  }

  ngOnInit() {
    this.getTask();
  }

}

