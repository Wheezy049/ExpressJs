const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const date = Date.now();
    next();
    const delta = Date.now() - date;
    console.log(`${req.method} request for ${req.baseUrl}${req.url} in ${delta}ms`);
});

app.use(express.json());

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter)

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});