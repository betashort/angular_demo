import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  title = 'todo-app';

  toDoList: string[] = [];
  toDo!: FormGroup;
  ngOnInit() {
    this.toDo = new FormGroup({
      title: new FormControl('')
    })
  }

  add():void{
    this.toDoList.push(this.toDo.value.title)
    console.log(this.toDoList);
  }
  clear(todo:string):void{
    const tmp = this.toDoList.filter((item) => (todo !== item));
    this.toDoList = tmp;
  }
}

