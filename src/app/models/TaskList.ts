import { TaskItem } from './TaskItem';


export class TaskList {

    list: TaskItem[] = [
        {
            title: "first",
            checked: false
        }
    ];

    constructor() {}

    getList() {
        return this.list;
    }
}