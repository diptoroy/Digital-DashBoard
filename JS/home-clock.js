function showTime()
{
	var date = new Date();
	var h    = date.getHours();
	var m    = date.getMinutes();
	var s    = date.getSeconds();
	var ms   = date.getMilliseconds();
	var y    = date.getFullYear();
	var mon  = date.getMonth() + 1;
	var d    = date.getDate();
	var days =
	[
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];
	var months =
	[
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	var day 	= days[ date.getDay() ];
	var month 	= months[ date.getMonth() ];
	var hour 	= date.getHours();
	var ses 	= "AM";
	if(hour == 0)
	{
		hour = 12;
	}
	if(hour > 12)
	{
		hour = hour - 12;
		ses = "PM";
	}
	h      = (h   	 < 10  ) ? "0"   + h      : h;
	m      = (m   	 < 10  ) ? "0"   + m      : m;
	s      = (s   	 < 10  ) ? "0"   + s      : s;
	ms     = (ms  	 < 10  ) ? "00"  + ms     : ms;
	mon    = (mon 	 < 10  ) ? "0"   + mon    : mon;
	d      = (d   	 < 10  ) ? "0"   + d      : d;
	hour   = (hour   < 10  ) ? "0"   + hour   : hour;						
	var noobtime =hour+":"+m+":"+s+" "+ses+","+day+","+d+" "+month+","+y;
	document.getElementById("CLK").textContent = noobtime;
	setTimeout(showTime, 0);
}
showTime();