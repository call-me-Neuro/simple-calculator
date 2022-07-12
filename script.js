let enter = '';
let result;
let result_bool = false;

let digits = document.getElementsByClassName('digits');
let d0 = document.querySelector('.zero');

let signs = document.getElementsByClassName('signs');

let text = document.getElementById('field-text');
let preliminary = document.getElementById('preliminary');
let last_preliminary;
let some_text = text.innerHTML;

let foo = function(a, b) {
	a.addEventListener("click", function() {
		enter+=b; 
		text.innerHTML = enter;
	})
} 

let buttons = [d0].concat([...digits]).concat([...signs]);
buttons.pop();
buttons.pop();
let values = [0,1,2,3,4,5,6,7,8,9,'+', '-', '/', '*'];

let counter = 0;

for (let item of buttons) {
	foo(item, values[counter]);
	counter++;
}

signs[5].addEventListener('click', function() {/* c */
	if (!result_bool & enter.length > 1) {
		enter = enter.substring(0,enter.length-1);
		text.innerHTML = enter;
	}
	else {
		enter = '';
		text.innerHTML = enter;
		result_bool = false
	}
})

signs[4].addEventListener('click', function() {/* = */
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

setInterval(() => { /* get input */
	if (text.innerHTML != some_text) {
		some_text = text.innerHTML;
		enter = some_text;
	}
}, 100);


setInterval(() => { /* show preliminary */
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
