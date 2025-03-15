const path = require('path'); 

function getMessages(req, res) {
    // res.send('<ul><li>Message 1</li><ul>');
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'image1.png'));
    res.render('messages', {
        title: 'Messages',
        friend: 'Elon Musk'
    });
};

function postMessage(req, res) {
        console.log('updating messages');
};

module.exports = {
    getMessages,
    postMessage
}