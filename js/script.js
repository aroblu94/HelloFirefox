var helloWorld = "HELLO, WORLD"

console.log(helloWorld)

//when click on "Click Me!" button --> confirmation screen
document.querySelector('clickMe').addEventListener('click', function() {
	document.querySelector('confirm').className = 'fade-in';
});

//when click on "Proceed" button --> IMG screen
document.querySelector('proceed').addEventListener('click', function() {
	document.querySelector('img').className = 'fade-in';
});
document.querySelector('proceed').addEventListener ('click', function () {
	this.className = 'fade-out';
});

//when click on "Cancel" button --> start screen
document.querySelector('cancel').addEventListener('click', function() {
	document.querySelector('hello-firefox').className = 'fade-in'
});
