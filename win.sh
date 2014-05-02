#!/bin/bash
c=0
s=0
while true
do
    if curl 'https://demopage.in/fb/rapidfire/resultfile.php' -H 'Pragma: no-cache' -H 'Origin: https://demopage.in' -H 'Accept-Encoding: gzip,deflate,sdch' -H 'Accept-Language: en-US,en;q=0.8' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Cache-Control: no-cache' -H 'Referer: https://demopage.in/fb/rapidfire/' -H 'Cookie: PHPSESSID=deadbeef' -H 'Connection: keep-alive' --data 'hiddenmemberid=-1&redirecturl=https%3A%2F%2Fwww.facebook.com%2Fnusschoolofcomputing%2F%3Fsk%3Dapp_1441375262772058&token=deadbeef&radio0=4&qstnid0=30&radio1=2&qstnid1=54&radio2=2&qstnid2=37&radio3=4&qstnid3=48&radio4=3&qstnid4=36&radio5=2&qstnid5=54&radio6=2&qstnid6=54&radio7=3&qstnid7=36&radio8=2&qstnid8=54&radio9=2&qstnid9=54&radio10=2&qstnid10=54&radio11=2&qstnid11=54&radio12=1&qstnid12=20&radio13=2&qstnid13=54&radio14=2&qstnid14=54' --compressed --silent | grep facebook.com > /dev/null; then
        s=$((s+1))
    fi
    c=$((c+1))
    echo `date` $s '/' $c
done
