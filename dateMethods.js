// 1 new Date()
let date= new Date();
console.log(date);

// 2 Date.parse()
let date2= Date.parse('February 26,2001');
console.log(date2);

// 3 Date.UTC()
let date3= Date.UTC(2001, 12, 10);
console.log(date3);

// 4 getDate()
let date4=new Date().getDate();
console.log(date4);

// 5 getMonth()
console.log(new Date().getMonth());

// 6 getFullYear()
console.log(new Date('2001-10-26').getFullYear());

// 7 getDay()
console.log(new Date().getDay());

// 8 getHours()
let date5= new Date().getHours();
console.log(date5);

// 9 getMinutes()
let date6= new Date().getMinutes();
console.log(date6);

// 10 getSeconds()
console.log(new Date().getSeconds());

// 11 getMilliseconds()
let date7= new Date().getMilliseconds();
console.log(date7);

// 12 setDate()
let date8= new Date('2016-12-25').setDate(10);
console.log(new Date(date8));

// 13 setMonth()
let date9= new Date().setMonth(8);
console.log(new Date(date9));

//  14 setFullYear()
let date10= new Date().setFullYear(2000);
console.log(new Date(date10));

// 15 setHours()
let date11= new Date().setHours(12);
console.log(new Date(date11));

// 16 setMinutes()
let date12= new Date().setMinutes(36);
console.log(new Date(date12));

// 17 setSeconds()
let date13= new Date().setSeconds(50);
console.log(new Date(date13));

// 18 setMilliseconds()
let date14= new Date().setMilliseconds(85);
console.log(new Date(date14));

// 19 todateString()
let date15= new Date().toDateString();
console.log(date15);

// 20 toLocaleDateString()
let date16= new Date().toLocaleDateString();
console.log(date16);

// 21 toTimeString()
let date17= new Date().toTimeString();
console.log(date17);

// 22 toLocaleTimeString()
let date18=new Date().toLocaleTimeString();
console.log(date18);

// 23 getUTCDate()
let date19=new Date().getUTCDate();
console.log(date19);

// 24 getUTCDay()
let date20= new Date().getUTCDay();
console.log(date20);

// 25 getUTCFullYear()
let date21= new Date().getUTCFullYear();
console.log(date21);

// 26 getUTCHours()
let date22= new Date().getUTCHours();
console.log(date22);

// 27 getUTCMinutes()
let date23= new Date().getUTCMinutes();
console.log(date23);

// 28 getUTCSeconds()
let date24= new Date().getUTCSeconds();
console.log(date24);

// 29 get UTCMilliseconds()
let date25= new Date().getUTCMilliseconds();
console.log(date25);

// 30 setUTCDate()
let date26= new Date('2015-11-29').setUTCDate(12);
console.log(new Date(date26));

// 31 setUTCFullYear()
let date27= new Date().setUTCFullYear(1999);
console.log(new Date(date27));

// 32 setUTCHours()
let date28= new Date().setUTCHours(6);
console.log(new Date(date28));

// 33 setUTCMinutes()
let date29= new Date().setUTCMinutes(45);
console.log(new Date(date29));

// 34 setUTCSeconds()
let date30= new Date().setUTCSeconds(36);
console.log(new Date(date30));

// 35 setUTCMilliseconds()
let date31= new Date().setUTCMilliseconds(37);
console.log(new Date(date31));

