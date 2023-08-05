import { Component, ViewChild } from '@angular/core';

interface Task {
  name: string;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  newTask: Task = {
    name: '',
    content: '',
    completed: false
  };

  tasksList: Task[] = [];

  clearList = () => {
    this.tasksList = [];
  }
  
  addItem = (empty: boolean) => {
    if (!empty) {
      this.newTask.name = this.newTask.name.trim();
      this.newTask.content = this.newTask.content.trim();
      
      if (!this.newTask.name) return false;

      let nextTask = { ...this.newTask };
      
      this.tasksList.push(nextTask);
      this.newTask.name = '', this.newTask.content = '', this.newTask.completed = false;
      return true;
      
    }
    this.newTask.name = '', this.newTask.content = '', this.newTask.completed = false;
    return true;
  }

  removeItem = (item: Task) => {
    item.name = item.name.trim();
    if (!item.name) return false;

    this.tasksList = this.tasksList.filter(t => t !== item);

    return true;
  }

  complete = (item: Task) => {
    item.completed = !item.completed;
  }
}
