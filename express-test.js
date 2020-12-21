const express = require('express');
const cookieParser = require('cookie-parser');
const { encode } = require('punycode');
app = express();

app.use(cookieParser());

function serializeCookie(name, val, opt) {
    var paris = [name +'=' + encode(val)]
}

app.get('/*', function(req, res) {
    // console.log(req);
    console.log(req.cookies);
    res.send('Hello World');
})

app.listen(3002, function() {
    console.log('Server listen at 3002');
})