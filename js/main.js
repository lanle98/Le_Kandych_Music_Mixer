(() => {

	console.log("fire!");


	let instruments = document.querySelectorAll(".instruments");
	let audio = document.querySelectorAll("audio")
	let button = document.querySelectorAll("button");
	
	instruments.forEach(Off => Off.volume = 0);
	let icons = document.querySelector(".icons")
	console.log(icons)
	let dropzone = document.getElementById("worldMap")
	console.log(dropzone)


	

			icons.querySelectorAll("img").forEach(img => img.addEventListener("dragstart", function o(e){
				console.log('draggin...');
				e.dataTransfer.setData("text/plain", this.dataset.instrumentsref);
				console.log(this.dataset.instrumentsref)
				
				
			}))


	

				// instruments[iconAudio].volume = 1;

			

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
		})

	


	
	


	

	})();