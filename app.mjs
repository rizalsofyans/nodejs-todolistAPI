import http from 'http';
import { TodolistService } from './service.mjs';

const service = new TodolistService();

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // if (req.method === 'GET') {
    //     service.getTodolist(req, res);
    // }

    switch (req.method) {
        case 'GET':
            service.getTodolist(req, res);
            break;
        case 'POST':
            service.createTodo(req, res);
            break;
        case 'PUT':
            service.updateTodo(req, res);
            break;
        case 'DELETE':
            service.deleteTodo(req, res);
    }
});

server.listen(3000);
