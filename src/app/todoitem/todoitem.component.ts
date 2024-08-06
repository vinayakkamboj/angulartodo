import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todoitem',
  standalone: true,
  imports: [],
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.css'
})
export class TodoitemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo>= new EventEmitter();
  constructor() {
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("You clicked on me");
  }

}
