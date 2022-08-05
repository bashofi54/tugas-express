const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.sendFile('./home.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname });
});

app.get('/story', (req, res) => {
    res.sendFile('./story.html', { root: __dirname });
});
app.get('/sample', (req, res) => {
    res.sendFile('./sample.json', { root: __dirname });
});
app.get('/sample2', (req, res) => {
    res.sendFile('./sample2.json', { root: __dirname });
});

app.use((req, res, next) => {
    res.status(404);
    res.send(`
    <h3>Status: "Failed"</h3>
    <h2>"Resource ${req.originalUrl} Not Found 404"</h2>
    `);
})

app.listen(port, () => {
    console.log(`Server Listening at: http://localhost:${port}`);
});