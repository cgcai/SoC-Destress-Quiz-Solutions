// npm install request
// node app.js

var QUESTIONS_LENGTH = 15;

var request = require('request');
var fs = require('fs');

// Your member id here:
var memberid = 481;

function getRandomArbitary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function generateQuestionsList(list) {
    var qns_list = [];
    for (var i = 0; i < QUESTIONS_LENGTH; i++) {
        var rand = getRandomArbitary(0, list.length);
        qns_list.push(list[rand]);
        list.slice(rand, 1);
    }
    return qns_list;
}

function postRequest(i, form_data) {
    request.post({
        url: 'https://demopage.in/fb/rapidfire/resultfile.php',
        headers: {
            'Cookie': 'PHPSESSID=fec674c31275b297c427e9d029fefc1a',
            'Host': 'demopage.in',
            'Origin': 'https://demopage.in',
            'Referer': 'https://demopage.in/fb/rapidfire'
        },
        form: form_data
    }, function(error, response, body) {
        if (response.statusCode == 200) {
            console.log(form_data);
            console.log(i + " ok!");
        }
    });
}

fs.readFile('solution-pretty.json', 'utf-8', function(err, file) {
    var qns = JSON.parse(file);
    for (var i = 0; i < 5; i++) {
        var qns_list = generateQuestionsList(Object.keys(qns));
        var data = {
            hiddenmemberid: memberid, 
            token: '06339b9607c353c066d4ca9dcf8207c8', 
            redirecturl: 'https://www.facebook.com/NUSComputingSchool/?sk=app_1441375262772058'
        };
        
        for (var j = 0; j < QUESTIONS_LENGTH; j++) {
            data['qstnid'+j] = qns_list[j];
            data['radio'+j] = parseInt(qns[qns_list[j]].correct_opt);
        }

        postRequest(i, data);
    }
});

