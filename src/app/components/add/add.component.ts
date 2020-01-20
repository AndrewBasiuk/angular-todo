import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/services/add.service';
import { TaskList } from '../taskList';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newTask: string;
  taskList: TaskList;

  constructor(public addService: AddService) { }

  addTask():void {
    this.addService.getTaskLabel(this.newTask);
  }

  ngOnInit() {
    // this.addTask();
    this.taskList.getList();
  }


}
