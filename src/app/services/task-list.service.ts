import { Injectable } from '@angular/core';
import { TaskItem } from '../models/TaskItem';


@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  list: TaskItem[] = [
    { id: 0, title: 'Text_1', checked: false },
    { id: 0, title: 'Text_2', checked: true },
    { id: 0, title: 'Text_3', checked: true },
    { id: 0, title: 'Text_4', checked: false },
    { id: 0, title: 'Text_5', checked: false },
  ];


  constructor() { }

  getTask() {
    return this.list;
  }
}
