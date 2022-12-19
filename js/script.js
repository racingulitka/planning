/*----------filling calendar grid------------*/
let a;
let b;
let numberDaysOfMonth;
let z; //date of selected day

window.onload = function(){
	selectedMonth();
}

function selectedMonth(){ //convert innerHTML of #planningRange to date
	a = document.getElementById('planningRange').innerHTML;
	let aArr = a.split(" ");
	aArr.reverse();
	switch (aArr[1]){
		case "Январь":{
			aArr[1] = "01";
			break;
		}
		case "Февраль":{
			aArr[1] = "02";
			break;
		}
		case "Март":{
			aArr[1] = "03";
			break;
		}
		case "Апрель":{
			aArr[1] = "04";
			break;
		}
		case "Май":{
			aArr[1] = "05";
			break;
		}
		case "Июнь":{
			aArr[1] = "06";
			break;
		}
		case "Июль":{
			aArr[1] = "07";
			break;
		}
		case "Август":{
			aArr[1] = "08";
			break;
		}
		case "Сентябрь":{
			aArr[1] = "09";
			break;
		}
		case "Октябрь":{
			aArr[1] = "10";
			break;
		}
		case "Ноябрь":{
			aArr[1] = "11";
			break;
		}
		case "Декабрь":{
			aArr[1] = "12";
			break;
		}
	}
	a = aArr.join("-");
		console.log(a);
		getDayOfWeek();
}

function getDayOfWeek(){
	a = a + "-01";
	b = new Date(a).getDay();
	appointFirstDayOfMonth();
}

function appointFirstDayOfMonth(){
	switch (b){
		case 1:{
			document.getElementById('cell_2_1').innerHTML = "1";
			break;
		}
		case 2:{
			document.getElementById('cell_2_2').innerHTML = "1";
			break;
		}
		case 3:{
			document.getElementById('cell_2_3').innerHTML = "1";
			break;
		}
		case 4:{
			document.getElementById('cell_2_4').innerHTML = "1";
			break;
		}
		case 5:{
			document.getElementById('cell_2_5').innerHTML = "1";
			break;
		}
		case 6:{
			document.getElementById('cell_2_6').innerHTML = "1";
			break;
		}
		default:{
			document.getElementById('cell_2_7').innerHTML = "1";
			break;
		}
	}
	zeroingBeginOfMonth()
}

function zeroingBeginOfMonth(){
	if (b == 0){
		for (i = 1; i < 7; i++){
			document.getElementById(`cell_2_${i}`).innerHTML = "";
		}
	}
	else{
		for (i = 1; i < b; i++){
			document.getElementById(`cell_2_${i}`).innerHTML = "";
		}
	}
	remainingDaysOfMonth();
}

function numberDaysInMonth(){
	let d = document.getElementById('planningRange').innerHTML;
	d = d.slice(0, -5);
	if (d == "Январь" || d == "Март" || d == "Май" || d == "Июль" || d == "Август" || d == "Октябрь" || d == "Декабрь"){
		numberDaysOfMonth = 31;
	}
	else if (d == "Февраль"){
		numberDaysOfMonth = 28;
	}
	else{
		numberDaysOfMonth = 30;
	}
	console.log(numberDaysOfMonth);

}

function remainingDaysOfMonth(){
	let c;
	numberDaysInMonth();
	if (b == 0){
		c = 7;
	}
	else{
		c = b;
	}
	for (i = 2; i <= numberDaysOfMonth +1 ; i++){
		c++
		document.getElementById(`cell_2_${c}`).innerHTML = i;
	}
	for (i = c; i <= 42; i++){
		document.getElementById(`cell_2_${i}`).innerHTML = "";
	}
}

function rangeSelect(){
	document.getElementById('planningRange').innerHTML = document.getElementById('monthSelect').value + " " + document.getElementById('yearSelect').value;
	selectedMonth();
}
/*-----------------event day window---------------------*/
function eventDayWindow(cellNumber){
	if (document.getElementById(`${cellNumber}`).innerHTML == ""){
		document.getElementById('eventDayList').style.cssText = "display:none;";
	}
	else{
		document.getElementById('eventDayList').style.cssText = "display:block;";
	}
	let monthWord;
	switch (document.getElementById('monthSelect').value){
		case "Январь": monthWord = "января";
		break;
		case "Февраль": monthWord = "февраля";
		break;
		case "Март": monthWord = "марта";
		break;
		case "Апрель": monthWord = "апреля";
		break;
		case "Май": monthWord = "мая";
		break;
		case "Июнь": monthWord = "июня";
		break;
		case "Июль": monthWord = "июля";
		break;
		case "Август": monthWord = "августа";
		break;
		case "Сентябрь": monthWord = "сентября";
		break;
		case "Октябрь": monthWord = "октября";
		break;
		case "Ноябрь": monthWord = "ноября";
		break;
		case "Декабрь": monthWord = "декабря";
		break;
	}
	document.getElementById('dateOfCell').innerHTML = `${document.getElementById(`${cellNumber}`).innerHTML} ${monthWord}`;
	z = document.getElementById(`${cellNumber}`).innerHTML;
	document.getElementById('dayOfWeek').innerHTML = getDayOfWeekForWindow();
	eventDayWindowCheckForEvents();

}

function getDayOfWeekForWindow(){
	let selectedDate = a.split("");
	selectedDate.pop();
	selectedDate.pop();
	selectedDate = selectedDate.join("");
	if (z.length = 1){
		z = "0" + z;
	}
	selectedDate = selectedDate + z;
	selectedDate = new Date(selectedDate).getDay();
	let x = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
	return x[selectedDate];
}

function closeEventDayWindow(){
	document.getElementById('eventDayList').style.cssText = "display:none;";
	document.getElementById('eventTable').style.cssText = "display:none;"

}

/*-------------------new edit event window-------------------*/

function createNewEvent(){
	document.getElementById('newEditEventWindow').style.cssText = "display:block;";
	document.getElementById('eventDayList').style.cssText = "display:none;";
	document.getElementById('dateOfCellEdit').innerHTML = document.getElementById('dateOfCell').innerHTML;
	document.getElementById('dayOfWeekEdit').innerHTML = document.getElementById('dayOfWeek').innerHTML;
}

function closeNewEditEventWindow(){
	document.getElementById('newEditEventWindow').style.cssText = "display:none;"
}

/*-----------------------addEvent--------------------------*/

function addEvent(){
	let name, description, importance, dateTime;
	name = document.getElementById("titleOfEvent").value;
	description = document.getElementById('descriptionOfEvent').value;
	importance = getImportanceToEvent();
	dateTime = a.split('');
	dateTime.pop();
	dateTime.pop();
	dateTime = dateTime.join('');
	dateTime = dateTime + z + 'T' + document.getElementById('timeOfEvent').value;
	let obj = {
		name: name,
		description: description,
		importance: getImportanceToEvent(),
		dateTime: dateTime
	}
	localStorage.setItem(dateTime, obj);
}

function getImportance(color){

	if (color == "yellow"){
		if (getComputedStyle(bellYellowEdit).border == '0px none rgb(0, 0, 0)'){
			document.getElementById('bellYellowEdit').style.cssText = "border:1px solid black;";
			document.getElementById('bellRedEdit').style.cssText = 'border:0px none rgb(0, 0, 0);';
		} else {
			document.getElementById('bellYellowEdit').style.cssText = "0px none rgb(0, 0, 0);";
		}
	} else {
		if (getComputedStyle(bellRedEdit).border == '0px none rgb(0, 0, 0)') {
			document.getElementById('bellRedEdit').style.cssText = "border:1px solid black;";
			document.getElementById('bellYellowEdit').style.cssText = 'border:0px none rgb(0, 0, 0);';
		} else {
			document.getElementById('bellRedEdit').style.cssText = "0px none rgb(0, 0, 0);";
		}
	}
}

function getImportanceToEvent(){
	if (getComputedStyle(bellYellowEdit).border == '1px solid rgb(0, 0, 0)') {
		return 1;
	} else if (getComputedStyle(bellRedEdit).border == '1px solid rgb(0, 0, 0)') {
		return 2;
	} else return 0;
}

function eventDayWindowCheckForEvents(){
	let temp1, temp2;
	let events = [];

	for (i in localStorage){
		temp2 = i.split('');
		for (j = 0; j < 6 ; j++){
			temp2.pop();
		}
		temp2 = temp2.join('');

		temp1 = a.split('');
		for (j = 0; j < 3; j++){
			temp1.pop();
		}
		temp1 = temp1.join('');
		temp1 = temp1 + "-" + z;

		if (temp2 == temp1){
			document.getElementById('eventTable').style.cssText = "display:block;";
			events["event" + i] = document.createElement('div');
			events["event" + i].className = 'eventListItem';
			events["event" + i].innerHTML = "event for example";
			document.getElementById("eventTable").append(events["event" + i]);
		}
	}
}
