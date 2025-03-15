function getMessages(req, res) {
    res.send('<ul><li>Message 1</li><ul>');
};

function postMessage(req, res) {
        console.log('updating messages');
};

module.exports = {
    getMessages,
    postMessage
}