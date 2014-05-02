// npm install request
// node app.js

require('https').globalAgent.maxSockets = 10;

var request = require('request');

var jar = request.jar();
jar.setCookie('PHPSESSID=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'https://demopage.in/fb/rapidfire/resultfile.php');

var request = request.defaults({jar:jar});

// Your member id here:
var memberid = -1;

var data = {
    hiddenmemberid: memberid,
    token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
};

for (var i=0;i<15;i++) {
    data['qstnid'+i] = 3;
    data['radio'+i] = 2;
}

function postRequest() {
    request.post('https://demopage.in/fb/rapidfire/resultfile.php',
                { form: data },
                function(error, response, body) {
                    console.log(error ? error : response.statusCode);
                });
}

setInterval(postRequest, 5000);
