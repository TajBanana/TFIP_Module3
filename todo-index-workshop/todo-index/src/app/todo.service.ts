import Dexie from "dexie";
import {Todo} from "./model";
import {Injectable} from "@angular/core";
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class TodoService extends Dexie{

  todoDexie: Dexie.Table<Todo, string>;

  constructor() {
    super('todo-db');

    this.version(1).stores({
      todoDexie: 'tid'
    })

    this.todoDexie = this.table('todoDexie')
  }

  public add(todo: Partial<Todo>): Promise<String> {
    todo.taskId = uuidv4().toString()
    console.info('generated id: ', todo.taskId)
    return this.todoDexie.put(todo as Todo)
  }
}
