import { Injectable, NgModule } from "@angular/core";
import { resolve } from "url";

let TODOS = [];

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor() {}
  get(query = "") {
    return new Promise(resolve => {
      let data;

      if (query === "completed" || query === "active") {
        const isCompleted = query === "completed";
        data = TODOS.filter(todo => todo.isDone === isCompleted);
      } else {
        data = TODOS;
      }

      resolve(data);
    });
  }
  put(changed) {
    return new Promise(resolve => {
      const index = TODOS.findIndex(todo => todo === changed);
      TODOS[index].title = changed.title;
      resolve(changed);
    });
  }
  add(data) {
    return new Promise(resolve => {
      TODOS.push(data);
      resolve(data);
    });
  }
  delete(selected) {
    return new Promise(resolve => {
      const index = TODOS.findIndex(todo => todo === selected);
      TODOS.splice(index, 1);
      resolve(true);
    });
  }
  deleteCompleted() {
    return new Promise(resolve => {
      TODOS = TODOS.filter(todo => !todo.isDone);
      resolve(TODOS);
    });
  }
  toggle(selected) {
    selected.isDone = !selected.isDone;
    return Promise.resolve();
  }
}
