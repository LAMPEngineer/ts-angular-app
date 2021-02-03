function doSomethingWithVar() {
	for (var i = 0; i < 5; i++) {
		console.log(i);
	}

	console.log('Var Finally: ' + i);
}

doSomethingWithVar();


function doSomethingWithLet() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
	}

	console.log('Let Finally: ' + i);
}

doSomethingWithLet();