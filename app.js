// npm install request
// node app.js

var request = require('request');

// Your member id here:
var memberid = 284;

var data = {hiddenmemberid: memberid};

for (var i=0;i<15;i++) {
    data['qstnid'+i] = 3;
    data['radio'+i] = 2;
}

function postRequest() {
    request.post('https://demopage.in/fb/rapidfire/result.php',
                { form: data },
                function(error, response, body) {
                    if (response.statusCode == 200) {
                        console.log("ok!");
                        //postRequest();
                    }
                });
}

for (var i=0;i<100;i++) {
    postRequest();
}
