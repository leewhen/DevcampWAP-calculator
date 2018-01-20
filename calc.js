var opBtn  	 = document.getElementById("opBtn");
var calBtn 	 = document.getElementById("calBtn");
var clearBtn 	 = document.getElementById("clearBtn");

var num1Ip 	 = document.getElementById("num1");
var num2Ip 	 = document.getElementById("num2");
var resultIp = document.getElementById("result");

opBtn.onclick = function() {
	if ( "+" === opBtn.value ) {
		opBtn.value = "-";
		opBtn.innerText = "-";
	} else {
		opBtn.value = "+";
		opBtn.innerText = "+";
	}
};

calBtn.onclick = function() {
	var num1Val = parseFloat(num1Ip.value);	
	var num2Val = parseFloat(num2Ip.value);
		
	if ( num1Val && num2Val ) {
		var result;
		if ( "+" === opBtn.value ) {
			result = num1Val + num2Val;
		} else {
			result = num1Val - num2Val;
		}
		resultIp.value = result;
		
	} else {
		console.log("NaN");
		alert("숫자를 입력해주세요!!");
	}
};

clearBtn.onclick = function() {
	num1Ip.value = "";
	num2Ip.value = "";
	resultIp.value = "";
};
