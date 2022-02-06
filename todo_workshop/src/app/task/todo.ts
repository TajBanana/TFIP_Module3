export class Todo {
  constructor(
    public task:string,
    public priority:string,
    public dueDate: Date,
    public status?: boolean
  ){

  }
}
