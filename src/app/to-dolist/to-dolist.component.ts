import { Component, OnInit} from '@angular/core';
import { AddToDoComponent } from "../add-to-do/add-to-do.component";
import { Todo } from '../Todo';
import { CommonModule } from '@angular/common';
import { TodoitemComponent } from "../todoitem/todoitem.component";

@Component({
  selector: 'app-to-dolist',
  standalone: true,
  imports: [AddToDoComponent, CommonModule, TodoitemComponent],
  templateUrl: './to-dolist.component.html',
  styleUrl: './to-dolist.component.css'
})
export class ToDolistComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "This is title",
        desc: "This is description",
        active: true,
        date: "2021-10-10",
        time: "10:10"
      },
      {
        sno: 2,
        title: "This is title",
        desc: "This is description",
        active: true,
        date: "2021-10-10",
        time: "10:10"
      },
      {
        sno: 3,
        title: "This is title",
        desc: "This is description",
        active: true,
        date: "2021-10-10",
        time: "10:10"
      }
    ]
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  deleteTodo(todo: Todo){
    console.log(todo);
    // const index = this.todos.indexOf(todo);
    // this.todos.splice(index, 1);
  }
} 

