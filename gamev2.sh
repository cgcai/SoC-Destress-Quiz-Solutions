#!/bin/bash
while :
do 
	output=$(curl -s -k -i --raw -X POST -d "hiddenmemberid=312&redirecturl=https%%3A%%2F%%2Fwww.facebook.com%%2Fnusschoolofcomputing%%2F%%3Fsk%%3Dapp_1441375262772058&token=3e191a89c94fda84460bfa8282d4d65a&radio0=1&qstnid0=4&radio1=1&qstnid1=4&radio2=1&qstnid2=4&radio3=1&qstnid3=4&radio4=1&qstnid4=4&radio5=1&qstnid5=4&radio6=1&qstnid6=4&radio7=1&qstnid7=4&radio8=1&qstnid8=4&radio9=1&qstnid9=4&radio10=1&qstnid10=4&radio11=1&qstnid11=4&radio12=1&qstnid12=4&radio13=1&qstnid13=4&radio14=1&qstnid14=4" "https://demopage.in/fb/rapidfire/resultfile.php" -H "Host: demopage.in" -H "Connection: keep-alive" -H "Cache-Control: max-age=0" -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8" -H "Origin: https://demopage.in" -H "User-Agent: Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36" -H "Content-Type: application/x-www-form-urlencoded" -H "Referer: https://demopage.in/fb/rapidfire/" -H "Accept-Encoding: gzip,deflate,sdch" -H "Accept-Language: en-US,en;q=0.8" -H "Cookie: PHPSESSID=4f53971afe2db1c1b55a5966dc9419e0" | grep "HTTP/1.1")
	if ($output | grep "200")
		then echo "ok" >> access.log;
	else
		echo "err" >> error.log;
	fi
done
