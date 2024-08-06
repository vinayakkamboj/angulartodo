import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDolistComponent } from './to-dolist/to-dolist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
}
