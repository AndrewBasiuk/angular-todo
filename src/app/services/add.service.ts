import { Injectable } from '@angular/core';
import { TaskItem } from '../models/TaskItem';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  item: TaskItem;
  list: TaskItem[] = [];
  title: string = "";

  getTaskLabel(text) {
    this.title = text;
  }

  addItem() {
    this.list.push({
      title: "aaaa",
      checked: false
    })
  }


  // list: TaskItem[] = [
  //   { id: 0, title: 'Text_1', checked: false },
  //   { id: 0, title: 'Text_2', checked: true },
  //   { id: 0, title: 'Text_3', checked: true },
  //   { id: 0, title: 'Text_4', checked: false },
  //   { id: 0, title: 'Text_5', checked: false },
  // ];

  // https://jsonplaceholder.typicode.com/todos

  constructor() { }

  allTask() {
    this.addItem();
    return this.list;
  }

}
