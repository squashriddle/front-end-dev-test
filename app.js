var valid = false;

var alpha = ["Larry", "Moe", "Curly", "Shemp"];
var beta = ["Password1", "Password2", "Password3", "Password4"];

var u = alpha[2];
var p = beta[4];

valid = true;

for (var i = 0; i <= alpha.length[i]; i++) {
	i = 10;
	if ((u === alpha[i]) && (p === beta[i])) {
		valid = "yes";
		break;
	}
};

if (valid) {
	alert ("Good job on fixing that!");
	return false;
}

else {
	alert ("Oops, try again!");
}
