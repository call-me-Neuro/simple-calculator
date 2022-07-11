let enter = '';
let result;
let result_bool = false;

let d1 = document.querySelector('#button-1');
let d2 = document.querySelector('#button-2');
let d3 = document.querySelector('#button-3');
let d4 = document.querySelector('#button-4');
let d5 = document.querySelector('#button-5');
let d6 = document.querySelector('#button-6');
let d7 = document.querySelector('#button-7');
let d8 = document.querySelector('#button-8');
let d9 = document.querySelector('#button-9');
let d0 = document.querySelector('.zero');

let dp = document.querySelector('#button-p');
let dm = document.querySelector('#button-m');
let dd = document.querySelector('#button-d');
let du = document.querySelector('#button-u');
let dr = document.querySelector('#button-r');
let dc = document.querySelector('#button-c');

let text = document.getElementById('field-text');
let preliminary = document.getElementById('preliminary');
let last_preliminary
let some_text = text.innerHTML;

let foo = function(a, b) {
	a.addEventListener("click", function() {
		enter+=b; 
		text.innerHTML = enter;
	})
} 

let list = [d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,dp,dm,dd,du];
let list2 = [0,1,2,3,4,5,6,7,8,9,'+', '-', '/', '*'];

let counter = 0;

for (let item of list) {
	foo(item, list2[counter]);
	counter++;
}

dc.addEventListener('click', function() {
	if (!result_bool & enter.length > 1) {
		enter = enter.substring(0,enter.length-1);
		text.innerHTML = enter;
	}
	else {
		enter = '';
		text.innerHTML = '0';
		result_bool = false
	}
})

dr.addEventListener('click', function() {
	try {
		result = eval(enter) + '';
		text.innerHTML = result;
		result_bool = true;
		enter = result
	}
	catch {
		alert('Error');
	}
})

setInterval(() => {
	if (text.innerHTML != some_text) {
		some_text = text.innerHTML;
		enter = some_text;
	}
}, 100);


setInterval(() => {
	try {
		if (eval(enter) == undefined || eval(enter) == enter) {
			preliminary.style.opacity = 0;
		}
		else {
			preliminary.style.opacity = 0.5;
			last_preliminary = eval(enter)
			preliminary.innerHTML = last_preliminary
		}
	}
	catch {
		preliminary.innerHTML = last_preliminary
	}
}, 500);