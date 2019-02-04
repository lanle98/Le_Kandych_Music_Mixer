(() => {

	console.log("fire!");


	let instruments = document.querySelectorAll(".instruments");

	
	instruments.forEach(Off => Off.volume = 0);
	


	let volumeOn = document.querySelector("audio");
	let button = document.querySelectorAll("button");
	let guitarbutton = document.getElementById("guitarbutton");
	let electric_guitarbutton = document.getElementById("electric_guitarbutton");
	let drumbbutton = document.getElementById("drumbbutton");
	let shakerbutton = document.getElementById("shakerbutton");
	let pianobutton = document.getElementById("pianobutton");
	let cajonbutton = document.getElementById("cajonbutton");




	function guitarOn()
	{
			document.getElementById("guitar").volume = 1;
			console.log(this);
	}


	function electric_guitarOn()
	{
			document.getElementById("electric_guitar").volume = 1;
			console.log(this);
	}


	function drumbOn()
	{
			document.getElementById("drumb").volume = 1;
			console.log(this);
	}


	function shakerOn()
	{
			shaker.volume = 1;
			console.log(this);
	}


	function pianoOn()
	{
			piano.volume = 1;
			console.log(this);
	}

	function cajonOn()
	{
			cajon.volume = 1;
			console.log(this);
	}

	// button.forEach(buttonOn => buttonOn.addEventListener("click",guitarOn));
	guitarbutton.addEventListener("click",guitarOn);
	electric_guitarbutton.addEventListener("click",electric_guitarOn);
	drumbbutton.addEventListener("click",drumbOn);
	shakerbutton.addEventListener("click",shakerOn);
	pianobutton.addEventListener("click",pianoOn);
	cajonbutton.addEventListener("click",cajonOn);

	

	})();