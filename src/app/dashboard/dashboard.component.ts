import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { StrengthPipe } from '../pipes/strength/strength.pipe';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,  
  imports:[StrengthPipe],
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos.slice(1, 5));
      // console.log('this.todos: ', this.todos);

  }
}
