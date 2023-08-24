//How to get the current date and time
const currentDate = new Date();
console.log(currentDate);
/* using the setDate() method to set the day of the month, 
and the setFullYear() method to set the year.
*/
let date = new Date();
date.setDate(15);
date.setFullYear(2022);
console.log(date);

/*You can also format the date and time using the 
toLocaleString() method, which allows you to specify 
the format and time zone. */

const datee = new Date();
console.log(date.toLocaleString());
console.log(date.toLocaleString('en-NG', {timeZone: 'UTC'}));
