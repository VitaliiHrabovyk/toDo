import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { toDo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(
    public toDosServ: TodoService,
    
  ) { 
    
    }

  form!: FormGroup;
  

  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl(null, [Validators.required])
    })


  }

  submit(){

    let toDo:toDo = {
      text: this.form.value.text,
      key: ""
    }
    this.toDosServ.addToDo(toDo)
    this.form.reset()

  }




}




