import { Component, OnInit } from '@angular/core';
import {  TodoModel } from '../todo';
import { StrengthPipe } from '../pipes/strength/strength.pipe';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-dashboard',
  imports:[StrengthPipe],
  templateUrl: './dashboard.html',
  styleUrls: [ './dashboard.css' ]
})
export class Dashboard implements OnInit {
  todos: TodoModel[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos.slice(1, 5));

  }
}
