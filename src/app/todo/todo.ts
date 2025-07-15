import { Component, Input } from '@angular/core';
import { TodoModel } from '../todo';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo{
  @Input() todo!: TodoModel;
}
