require('./lib/core');
var tmpl = require('./lib/tmpl');
tmpl.load('./templates/', function(exp) {
    console.log('Templates loaded');
});

require('./model/Abstract');
require('./model/Board');
require('./model/User');
require('./model/Forum');

var server = require('./lib/router').getServer()
    urlParser = require('url'),
    fs = require('fs');

server.get("/", function(request, response) {
    fs.readFile('./templates/layout.tpl', 'utf8', function(er, ok) {
        if (er) {
            throw er;
        }
        response.simpleHtml(200, ok);
    });
});

server.get("/forums", function(request, response) {
    var urlObject = urlParser.parse(request.url, true),
        $_GET = urlObject.query || {},
        page = parseInt($_GET.page) || 1,
        count = 10,
        board = new xForum.Model.Board();
    board.requestForums(page, count, function(forums) {
        response.simpleJson(200, {
            forums : forums, 
            forumsCount : board.getForumsCount(),
            currentPage : page
        });
    });
});

server.get("/json", function (req, res, match) {
  return {hello: "World"};
});

server.get(new RegExp("^/(.*)$"), function hello(req, res, match) {
  return "Hello " + (match || "World") + "!";
});

server.listen(8000);