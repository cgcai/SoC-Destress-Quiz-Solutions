// npm install request
// node app.js

require('https').globalAgent.maxSockets = 10;

var request = require('request');

var jar = request.jar();
jar.setCookie('PHPSESSID=25cd4b796621199b15944a2da8972283', 'https://demopage.in/fb/rapidfire/resultfile.php');

var request = request.defaults({jar:jar});

// Your member id here:
var memberid = 239;

var data = {
    hiddenmemberid: memberid,
    token: 'd9d2be34fe20782809a24bcba69b542d'
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
