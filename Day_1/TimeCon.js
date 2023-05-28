//Given a time in 12-hour AM/PM format, Convert it to military (24-hour) time.

//Note:- 
//1 > 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 
//Ex- if s = '12:01:00AM' should Return '00:01:00'. similarly if s = '01:01:00AM' should Return '01:01:00'.

//2 > 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
//Ex- if s = '12:01:00PM' should Return '12:01:00'. similarly if s = '02:01:00PM' should Return '14:01:00'.


function timeConversion(s) {
    // Write your code here
    const arr = s.slice(0,8).split(':');
    arr[0] = (s.indexOf('PM') > -1) ?
         (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
         (arr[0] == 12 ? '00' : arr[0]);
         console.log(arr.join(':'));
}

timeConversion('12:01:00AM');
timeConversion('02:01:00AM');
timeConversion('12:01:00PM');
timeConversion('02:01:00PM');