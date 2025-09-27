const http = require('http');
const url = require('url');

const todos = [
    {id: 1, title: "Learn Node.js", completed: false},
    {id: 2, title: "Build a Server", completed: true},
    {id: 3, title: "Practice JavaScript", completed: false}
];

const server = http.createServer((req, res)=>{
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todos));
res.writeHead(200, { 'Content-Type': 'text/html' });

    // Route: GET /todos
    if (path === '/todos' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos));
    }

    // Route: GET /todos/:id
    else if (path.startsWith('/todos/') && method === 'GET') {
        const idStr = path.split('/')[2]; // get the ID from the URL
        const id = parseInt(idStr);

        const todo = todos.find(t => t.id === id);

        if (todo) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <html>
                    <head><title>Todo ${todo.id}</title></head>
                    <body>
                        <h1>Todo ID: ${todo.id}</h1>
                        <p><strong>Title:</strong> ${todo.title}</p>
                        <p><strong>Completed:</strong> ${todo.completed}</p>
                    </body>
                </html>
            `);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`<h1>Todo with ID ${id} not found.</h1>`);
        }
    }

    // Handle unknown paths
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});