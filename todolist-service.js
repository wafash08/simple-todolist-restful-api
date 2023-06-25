export class TodolistService {
  todolist = ["makan", "minum", "belajar"];

  getJsonTodolist() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value,
        };
      }),
    });
  }

  getTodolist(request, response) {
    response.write(this.getJsonTodolist());
    response.end();
  }

  createTodo(request, response) {
    request.addListener("data", data => {
      const body = JSON.parse(data);
      this.todolist.push(body.todo);

      response.write(this.getJsonTodolist());
      response.end();
    });
  }
}
