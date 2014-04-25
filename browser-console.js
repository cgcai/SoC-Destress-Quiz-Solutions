// Select app_runner_fb_https... frame context in Chrome / Safari or
// cd(frames[0]) in Firebug / IE
var score = 0;
setInterval(function () {
  $.post('https://demopage.in/fb/rapidfire/result.php',
    'hiddenmemberid=239&radio0=4&qstnid0=57&radio1=4&qstnid1=35&radio2=4&qstnid2=59&radio3=3&qstnid3=26&radio4=4&qstnid4=6&radio5=4&qstnid5=49&radio6=4&qstnid6=28&radio7=3&qstnid7=51&radio8=4&qstnid8=12&radio9=1&qstnid9=44&radio10=1&qstnid10=55&radio11=2&qstnid11=46&radio12=3&qstnid12=7&radio13=4&qstnid13=38&radio14=4&qstnid14=11',
    function () {
      console.log(score += 75);
    });
}, 5000);
