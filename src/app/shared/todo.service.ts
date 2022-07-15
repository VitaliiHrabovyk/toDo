import { Injectable } from '@angular/core';
import {toDo} from "../shared/todo.model"



@Injectable({
  providedIn: 'root'
})
export class TodoService {


  toDos:toDo[] = []
  

  constructor() {
    console.log(this.toDos);
    this.getDataFromStorage()
   }


   getDataFromStorage(){
    this.toDos.length = 0;
    let keys = Object.keys(localStorage)
    let arr:toDo[]
    keys.forEach(key => {
          this.toDos.push({
            'text': localStorage.getItem(key) || "",
            'key': key
          })
    });
   }

  addToDo(toDo:toDo){
    let count = Object.keys(localStorage)
    localStorage.setItem(String(count.length+1), toDo.text);
    this.getDataFromStorage()
  }

  deleteToDo(key:string){
    localStorage.removeItem(key)
    this.getDataFromStorage()

  }

  clearAll(){
  this.toDos.length = 0;
  localStorage.clear();
  }
  
    

}

