/*----------filling calendar grid------------*/
let a;
let b;
let numberDaysOfMonth;

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
/*--------------------------------------*/
