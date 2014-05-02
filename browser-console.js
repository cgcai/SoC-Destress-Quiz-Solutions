// Goto https://demopage.in/fb/rapidfire/, paste this in console, profit.
var score = 0;
var post = function () {
 $.post('https://demopage.in/fb/rapidfire/gotoquiz.php',
   // Your member id here.
   'id=-1',
   function () {
     $.post('https://demopage.in/fb/rapidfire/',
       // Your Facebook signed request here.
       //              v
       'signed_request=facefeed',
       function (data) {
         var token = data.match(/value="(.+)" name="token"/);
         if (token) {
           $.post('https://demopage.in/fb/rapidfire/resultfile.php',
             // Your member id here. (15 correct answers)
             //              v
             'hiddenmemberid=-1&radio0=4&qstnid0=57&radio1=4&qstnid1=35&radio2=4&qstnid2=59&radio3=3&qstnid3=26&radio4=4&qstnid4=6&radio5=4&qstnid5=49&radio6=4&qstnid6=28&radio7=3&qstnid7=51&radio8=4&qstnid8=12&radio9=1&qstnid9=44&radio10=1&qstnid10=55&radio11=2&qstnid11=46&radio12=3&qstnid12=7&radio13=4&qstnid13=38&radio14=4&qstnid14=11&token=' +
             token[1],
             function () {
               console.log(score += 75);
             }).always(post);
         } else {
           console.log('No token found!');
           post();
         }
       }).fail(post);
   }).fail(post);
};
post();


// Same script, but sends requests one at a time for fine grained control
// over score.

// var score = 0;
// var post = function () {
//  $.post('https://demopage.in/fb/rapidfire/gotoquiz.php',
//    'id=-1',
//    function () {
//      $.post('https://demopage.in/fb/rapidfire/',
//        'signed_request=facefeed',
//        function (data) {
//          var token = data.match(/value="(.+)" name="token"/);
//          if (token) {
//            $.post('https://demopage.in/fb/rapidfire/resultfile.php',
//              'hiddenmemberid=-1&radio0=4&qstnid0=57&token=' +
//              token[1],
//              function () {
//                console.log(score += 5);
//              })
//          } else {
//            console.log('No token found!');
//          }
//        })
//    })
// };