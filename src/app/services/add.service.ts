import { Injectable } from '@angular/core';
import { TaskItem } from '../models/TaskItem';



@Injectable({
  providedIn: 'root'
})
export class AddService {

  list: TaskItem[] = [
    { title: 'Text_1', checked: false },
    { title: 'Text_2', checked: true },
    { title: 'Text_3', checked: true },
    { title: 'Text_4', checked: false },
    { title: 'Text_5', checked: false }
  ];

  addTaskItem(item):void {
    this.list.push(item);
  }

  getTaskList() {
    return this.list;
  }


  // https://jsonplaceholder.typicode.com/todos

  constructor() { }


}
