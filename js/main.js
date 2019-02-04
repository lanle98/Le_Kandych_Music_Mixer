(() => {

	console.log("fire!");


	let instruments = document.querySelectorAll(".instruments");
	let button = document.querySelectorAll("button");
	console.log(button);
	
	instruments.forEach(Off => Off.volume = 0);
	
	button[0].addEventListener("click", function()
	{
		instruments[0].volume = 1;
		console.log(button[0]);

	});

	button[1].addEventListener("click", function()
	{
		instruments[1].volume = 1;
		console.log(button[1]);

	});


	button[2].addEventListener("click", function()
	{
		instruments[2].volume = 1;
		console.log(button[2]);

	});


	button[3].addEventListener("click", function()
	{
		instruments[3].volume = 1;
		console.log(button[3]);

	});

	button[4].addEventListener("click", function()
	{
		instruments[4].volume = 1;
		console.log(button[4]);

	});
	


	button[5].addEventListener("click", function()
	{
		instruments[5].volume = 1;
		console.log(button[5]);

	});

	})();