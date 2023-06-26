import http from "http";
import { TodolistService } from "./todolist-service.js";

const todolistService = new TodolistService();

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");

  if (request.method === "GET") {
    todolistService.getTodolist(request, response);
  } else if (request.method === "POST") {
    todolistService.createTodo(request, response);
  } else if (request.method === "PUT") {
    todolistService.updateTodo(request, response);
  } else if (request.method === "DELETE") {
    todolistService.deleteTodo(request, response);
  }
});

server.listen(3000);
