var valid = false;

var alpha = ["Larry", "Moe", "Curly", "Shemp"];
var beta = ["Password1", "Password2", "Password3", "Password4"];

var u = alpha[0];
var p = beta[0];

for (var i = 0; i <= alpha.length; i++) {
	if ((u === alpha[i]) && (p === beta[i])) {
		valid = true;
		break;
	}
};

if (valid) {
	alert ("Good job on fixing that!");
}

else {
	alert ("Oops, try again!");
}