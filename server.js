const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
    const date = Date.now();
    next();
    const delta = Date.now() - date;
    console.log(`${req.method} request for ${req.baseUrl}${req.url} in ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname,'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Express Project',
        caption: 'This is a caption'
    });
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter)

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});