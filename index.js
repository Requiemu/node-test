var http = require('http');
const { encode } = require('punycode');
http.createServer(function(req, res) {
    console.log(req.method)
    console.log(req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/')

function parseCookie(cookie) {
    var cookies = {};
    if (!cookie) {
        return cookies;
    }

    var list = cookie.split(';');
    for (var i = 0; i < list.length; i++) {
        var pair = list[i].split('=');
        cookies[pair[0].trim()] = pair[1];
    }
    return cookies
}

// req.cookies = parseCookie(req.headers.cookie);

function serialize(name, val, opt) {
    var pairs = [name + '=' + encodeURIComponent(val)];
    opt = opt || {};

    if (opt.maxAge) pairs.push('Max-Age=' + opt.maxAge);
    if (opt.domain) pairs.push('Domain=', opt.domain);
    if (opt.path) pairs.push('Path=' + opt.path);
    if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
    if (opt.httpOnly) pairs.push('HttpOnly');
    if (opt.secure) pairs.push('Secure');

    return pairs.join('; ');
}