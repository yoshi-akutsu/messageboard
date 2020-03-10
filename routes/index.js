var express = require('express');
var router = express.Router();

const messages = [
  {text: "Hi there!", user: "Amanda", added: new Date()},
  {text: "Howdy!", user: "John", added: new Date()},
  {text: "Greetings.", user: "George", added: new Date()},
  {text: "Yo!", user: "Casie", added: new Date()},
  {text: "Well ain't it a party in here!", user: "Jorge", added: new Date()},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message', messages });
});

module.exports = router;
