function rotateButtons() {

   let button1 = document.getElementById("btn1").innerHTML;
   let button2 = document.getElementById("btn2").innerHTML;
   let button3 = document.getElementById("btn3").innerHTML;
   let button4 = document.getElementById("btn4").innerHTML;
   let button6 = document.getElementById("btn6").innerHTML;
   let button7 = document.getElementById("btn7").innerHTML;
   let button8 = document.getElementById("btn8").innerHTML;
   let button9 = document.getElementById("btn9").innerHTML;


	var buttonVal = button1;
	document.getElementById("btn1").innerHTML = button4;
	document.getElementById("btn2").innerHTML = button1;
	document.getElementById("btn3").innerHTML = button2;
    document.getElementById("btn6").innerHTML = button3;
	document.getElementById("btn9").innerHTML= button6;
	document.getElementById("btn8").innerHTML = button9;
	document.getElementById("btn7").innerHTML = button8;
	document.getElementById("btn4").innerHTML = button7;
}

