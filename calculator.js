	var choice = prompt("Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide ");

function addition() {
	var val1 = parseFloat(prompt("Enter first value")); 
	var val2 = parseFloat(prompt("Enter the second value"));
	var result = val1 + val2;
	return result;
}

function substract() {
	var val1 = parseFloat(prompt("Enter first value")); 
	var val2 = parseFloat(prompt("Enter the second value"));
	var result = val1 - val2;
	return result;
}

function multiply() {
	var val1 = parseFloat(prompt("Enter first value")); 
	var val2 = parseFloat(prompt("Enter the second value"));
	var result = val1 * val2;
	return result;
}

function divide() {
	var val1 = parseFloat(prompt("Enter first value")); 
	var val2 = parseFloat(prompt("Enter the second value"));
	var result = val1 / val2;
	return result;
}

	switch (choice) {
	case "a":
	var a2 = addition();
	alert(a2)
	break;
	case "s":
	var a3 = substract();
	alert(a3)
	break;	
	case "m":
	var a4 = multiply();
	alert(a4)
	break;
	case "d":
	var a5 = divide();
	alert(a5)
	break;
	default:
	alert("Unrecognised Input");		
	}

