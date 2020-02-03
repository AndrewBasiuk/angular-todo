import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/services/add.service';
import { TaskList } from '../taskList';
import { TaskItem } from 'src/app/models/TaskItem';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  taskTitle: string;
  item: TaskItem;
  taskList: TaskItem[];

  constructor(public addService: AddService) { }

  newTaskItem() {

    this.item = {
      title: this.taskTitle,
      checked: true
    }

    return this.item;

  }

  addTask():void {
    this.addService.addTaskItem(this.newTaskItem());

    console.log(this.addService.getTaskList());
    
  }

  ngOnInit() {    
  }


}
