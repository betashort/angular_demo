import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-app';

  toDoList: string[] = ['プログラミング', '英語'];
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
