var age;
var back;
function get() {
	age = new Date(Date.now() - new Date("Wen, 28 Aug 2003 2:00:00 GMT").getTime() - 62167223780000);
	back = {
		year: age.getFullYear(),
		month: age.getMonth(),
		day: (age.getDate() - 1),
		hour: age.getHours(),
		minute: age.getMinutes(),
		second: age.getSeconds(),
		millisecond: age.getMilliseconds()
	};
	postMessage(JSON.stringify(back));
	setTimeout("get()", 100);
}
get();
