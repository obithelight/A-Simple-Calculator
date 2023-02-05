function clr(){
	document.querySelector("#result").value = ""
}

function display(val){
	document.querySelector("#result").value += val
}

function equate(){
	let x = document.querySelector("#result").value
 	let y = eval(x)
 	document.querySelector("#result").value = y
}

