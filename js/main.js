(() => {

	console.log("fire!");


	let instruments = document.querySelectorAll(".instruments");
	let audio = document.querySelectorAll("audio")
	let button = document.querySelectorAll("button");
	let waveZone = document.querySelector(".pulsing_Circles")
	instruments.forEach(Off => Off.volume = 0);
	let icons = document.querySelector(".icons")
	console.log(icons)
	let dropzone = document.getElementById("worldMap")
	console.log(dropzone)
	let newMap;
	let i = 1;
	let pulsingCir = document.querySelector(".pulsing_Circles")

	

			icons.querySelectorAll("img").forEach(img => img.addEventListener("dragstart", function o(e){
				console.log('draggin...');
				e.dataTransfer.setData("text/plain", this.dataset.instrumentsref);
				console.log(this.dataset.instrumentsref)
				
			 	console.log(this)
			 	console.log(img)


	
				
				
			}))


	


	

	


	dropzone.addEventListener("dragover", function(e){
			e.preventDefault();
			console.log('dragged over me!')
		}); 

		dropzone.addEventListener("drop", function(e) {
			e.preventDefault();
			let dataDrop = e.dataTransfer.getData("text/plain");
			console.log(dataDrop)
				instruments[dataDrop].volume = 1;
			console.log('you dropped something on me');

			if(pulsingCir.childElementCount<7 )
				{
					let newWave = `<img class="wave${e.dataTransfer.getData("text/plain")}" class="wave-image"
				 	src="images/${"wave"+ e.dataTransfer.getData("text/plain")}.svg" alt="Wave" draggable>`;
				 	waveZone.innerHTML += newWave;
				 	console.log(newWave);
				}
			
			 if(i<=6)
			 	{
			 		newMap = `<img class="map map1" class="wave-image"
			 	src="images/${"map"+ i++}.svg" alt="Wave" draggable>`;
			 	console.log(newMap);


			 	}

			 	
				
			
			 	// dropzone.removeChild(dropzone.firstElementChild)
			 	dropzone.innerHTML += newMap;
			 	// dropzone.removeChild(dropzone.children[1])
			 
			 	
		})

	


	
	


	

	})();