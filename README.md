Quiz Solutions
==============

The quiz was destressful in an unintended way.

##Questions, Solutions

* `questions.py` -- Python script to retrieve quiz questions in http://tinyurl.com/destressquiz.

The endpoint returns 15 random entries from a set each time it is hit. This
script collates entries over multiple runs to rebuild the complete list.

You need to `pip install -r requirements.txt` to run it.

* `solutions-pretty.json` -- Quiz questions and solutions.

##Iteration 1: Naïve
Simply replaying the request to `results.php` would increment your score by 75
points.

This is too trivial; no scripts here :(

##Iteration 2: Token token
There was a unique token supplied per play through, but the app didn't check
that this token was valid and unused. Just replay a request that contains the
token variable

* `app.js` -- NodeJS implementation, faster.
* `win.sh` -- Shell implementation, slower.

##Iteration 3: Stateful
App started checking token. It was necessary to hit a couple of endpoints to
simulate state before the requests were accepted. The endpoint was changed
to `resultsfile.php`

* `browser-console.js`
