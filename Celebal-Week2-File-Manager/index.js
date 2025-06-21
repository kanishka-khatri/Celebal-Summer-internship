const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Folder to store files
const basePath = path.join(__dirname, 'files');

// Create the folder if it doesn't exist
if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath);
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    const pathname = parsedUrl.pathname;
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (pathname === '/create') {
        if (!query.name) return res.end('Filename missing.');
        const filePath = path.join(basePath, query.name);
        fs.writeFileSync(filePath, query.content || '');
        res.end(`File '${query.name}' created successfully.`);
    }

    else if (pathname === '/read') {
        if (!query.name) return res.end('Filename missing.');
        const filePath = path.join(basePath, query.name);
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            res.end(`Contents of '${query.name}':\n\n${data}`);
        } else {
            res.end(`File '${query.name}' not found.`);
        }
    }

    else if (pathname === '/delete') {
        if (!query.name) return res.end('Filename missing.');
        const filePath = path.join(basePath, query.name);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            res.end(`File '${query.name}' deleted successfully.`);
        } else {
            res.end(`File '${query.name}' does not exist.`);
        }
    }

    else {
        res.end(`Welcome to the Node.js File Manager!
Available Routes:
/create?name=yourfile.txt&content=yourcontent
/read?name=yourfile.txt
/delete?name=yourfile.txt`);
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
