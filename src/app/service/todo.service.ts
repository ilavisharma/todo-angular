import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = [
      { id: '222', title: 'Learn React', isCompleted: true, date: new Date() },
      {
        id: '111',
        title: 'Learn Angular',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '333',
        title: 'Learn Svelte',
        isCompleted: false,
        date: new Date(),
      },
    ];
  }

  getTodos() {
    return of(this.todos); // todos is now an obervable
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo) {
    this.todos.map((singleTodo) => {
      if (singleTodo.id === todo.id) {
        singleTodo.isCompleted = !singleTodo.isCompleted;
      }
    });
  }

  deleteTodo(todo: Todo) {
    const indexOfTodo = this.todos.findIndex((t) => t.id === todo.id);
    this.todos.splice(indexOfTodo, 1);
  }
}
