import { TaskItem } from '../models/TaskItem';

export class TaskList {
    list: TaskItem[] = [];
    
    getList() {
        console.log(this.list)
    }
}