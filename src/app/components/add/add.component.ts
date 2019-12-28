import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newTask: string;

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    console.log(this.newTask);
  }

}
