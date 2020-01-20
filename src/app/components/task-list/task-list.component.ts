import { Component, OnInit } from '@angular/core';
import { TaskItem } from 'src/app/models/TaskItem';
import { TaskListService } from 'src/app/services/task-list.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  list: TaskItem[];

  constructor(public taskListService: TaskListService) { }

  // getTask():void {
  //   this.list = this.taskListService.allTask();
  // }

  ngOnInit() {
    // this.getTask();
  }

}
