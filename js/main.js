(() => {

	console.log("fire!");


	let instruments = document.querySelectorAll(".instruments");
		audio = document.querySelectorAll("audio")
		button = document.querySelectorAll("button");
		waveZone = document.querySelector(".pulsing_Circles")
		soundOff = instruments.forEach(Off => Off.muted = true);
		icons = document.querySelector(".icons")
		dropzone = document.getElementById("worldMap")
	let	newMap;
		a = 1;
		pulsingCir = document.querySelector(".pulsing_Circles")
		waveArray = ['wave0', 'wave1', 'wave2', 'wave3', 'wave4', 'wave5']
		prompt = document.querySelector(".prompt")
		prompt_btn = document.querySelector(".prompt-btn")
		soundbtn = document.querySelector(".sound")
		volumeOn = document.querySelector(".volumeOn")
		volumeOff = document.querySelector(".volumeOff")
		reset = document.querySelector(".reset")

	// add function to close prompt
	prompt_btn.addEventListener("click", function (){
		let prompt = document.querySelector(".prompt")
		prompt.style.display = "none"
		document.querySelector(".container").style.display = "block"
	})


	// reset button
	reset.addEventListener("click", function(){
		location.reload()

	})




	// drag function
	icons.querySelectorAll("img").forEach(img => img.addEventListener("dragstart", function o(e){
				console.log('draggin...');
				e.dataTransfer.setData("text/plain", this.dataset.instrumentsref);
				console.log(this.dataset.instrumentsref)
				
			}))


	


	

	

	// drag over function
	dropzone.addEventListener("dragover", function(e){
			e.preventDefault();
			console.log('dragged over me!')
		}); 


	// drop function
	dropzone.addEventListener("drop", function(e) {
			e.preventDefault();


			// get data from drag
			let dataDrop = e.dataTransfer.getData("text/plain");

			// if mute button is on => mute everything
			if(volumeOff.style.display === "block")
			{
				instruments[dataDrop].muted = true;
			}
			// else, unmute
			else
			{
				instruments[dataDrop].muted = false;
			}

			console.log('you dropped something on me');

			// create sound waves
			let newWave = `<img class="wave${e.dataTransfer.getData("text/plain")} wave-image" id="wave${e.dataTransfer.getData("text/plain")}"
			src="images/${"wave"+ e.dataTransfer.getData("text/plain")}.svg" alt="Wave" draggable>`;


			
			// mute and unmute button
			soundbtn.addEventListener("click", function (){
				
					if(instruments[dataDrop].muted == false)
					{
						
						volumeOn.style.display= "none"
						volumeOff.style.display= "block"
						instruments[dataDrop].muted = true
					}
					else
					{
						volumeOn.style.display= "block"
						volumeOff.style.display= "none"
						instruments[dataDrop].muted = false
					}
				
				
		})


	

			// append sound waves to DOM
			waveZone.innerHTML += newWave;
			let wave = document.querySelectorAll(".wave-image");

			// avoid appending the same elements
			wave.forEach(function (e) {
				
				for( let i = 0; i<waveArray.length; i++)
				{
					if(e.id === waveArray[i])
					{
						waveArray.splice(waveArray.indexOf(e.id),1)
						console.log(waveArray)
						waveZone.innerHTML += newWave;



						// create flashing map
						let newMap = `<img class="map mapFlashing"
			 			src="images/${"map"+ a++}.svg" alt="Wave" draggable>`;

						dropzone.innerHTML += newMap;
					}

				}

			})

			// remove the child if it's repeated
			waveZone.removeChild(waveZone.lastChild);



			 	
		})


})();