import { Component, NgModule } from '@angular/core';
import { Todo } from '../../../models/Todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { EditTodoComponent } from "../edit-todo/edit-todo.component";


@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [CommonModule, NewTodoComponent, EditTodoComponent]
})
export class TodosComponent {
  
  showAddNewTodoForm: boolean = true;
  showEditTodoForm: boolean = true;
  id!: number;
  todoText!: string;

  receiveClose() {
    this.showEditTodoForm = true;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  editTodo(id: number) {
    this.id = id;
    this.todoText = this.todos.filter(todo => todo.id === id)[0].text;
    this.showEditTodoForm = false;
  }
  clearCompleted() {
    this.todos = this.todos.filter( todo => !todo.completed  )
  }
  clearAll() {
    this.todos = [];
  }
  toggleCompleted(id: number) {
    this.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
  }
  receivedText: string = '';
  receiveText(text: string, id: number = 0) {
    this.receivedText = text;
    if(!id)
      this.todos.push({
        id: this.todos.length + 1,
        text: text,
        completed: false
      });
    else
      this.todos.map(todo => {
        if (todo.id === id) {
          todo.text = text;
        }
      })
      this.showEditTodoForm = true;
  }

  receiveShow() {
    this.showAddNewTodoForm = true;
  }
  addNewTodo() {
    this.showAddNewTodoForm = false;
  }
  todos: Todo[] = [
    {
      id: 1,
      text: 'Todo One',
      completed: false
    },
    {
      id: 2,
      text: 'Todo Two',
      completed: true
    },
    {
      id: 3,
      text: 'Todo Three',
      completed: false
    }
  ];
  
}
