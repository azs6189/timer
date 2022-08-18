class Timer {
	constructor(durationInput, startButton, pauseButton) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;

		this.startButton.addEventListener("click", this.start);
	}
	start() {
		this.importantMethodToCall();
	}
	importantMethodToCall() {
		console.log("important thing was done!!!");
	}
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
// timer.start();

const colors = {
	printColor() {
		console.log(this);
	},
};
// colors.printColor();
const randomObject = {
	a: 1,
};
randomObject.printColor = colors.printColor;
randomObject.printColor();
