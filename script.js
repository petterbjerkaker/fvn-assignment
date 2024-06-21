const housingData = {
		"Oslo": {
		  "Endring siste måned": 0.2,
		  "Endring sesongjustert siste måned": 0.2,
		  "Endring hittil i år": "6,9 %",
		  "Endring siste år": 2.5,
		  "Endring siste 5 år": 27.8,
		  "Endring siste 10 år": 88,
		  "Gjennomsnitt kvm. pris": "97 418",
		  "Gjennomsnittspris": "6 802 890",
		  "image":"assets/images/oslo.jpg"
		},
		"Bergen": {
		  "Endring siste måned": 1.4,
		  "Endring sesongjustert siste måned": 1,
		  "Endring hittil i år": "11,0 %",
		  "Endring siste år": 4.3,
		  "Endring siste 5 år": 26.2,
		  "Endring siste 10 år": 43.8,
		  "Gjennomsnitt kvm. pris": "56 450",
		  "Gjennomsnittspris": "4 454 224",
		  "image":"assets/images/bergen.jpg"
		},
		"Trondheim": {
		  "Endring siste måned": 0.1,
		  "Endring sesongjustert siste måned": 0,
		  "Endring hittil i år": "5,6 %",
		  "Endring siste år": -0.6,
		  "Endring siste 5 år": 18.8,
		  "Endring siste 10 år": 39.7,
		  "Gjennomsnitt kvm. pris": "56 988",
		  "Gjennomsnittspris": "4 261 766",
		  "image":"assets/images/trondheim.jpg"
		},
		"Stavanger m/omegn": {
		  "Endring siste måned": 0.9,
		  "Endring sesongjustert siste måned": 0.3,
		  "Endring hittil i år": "10,0 %",
		  "Endring siste år": 4.8,
		  "Endring siste 5 år": 28.3,
		  "Endring siste 10 år": 17.2,
		  "Gjennomsnitt kvm. pris": "46 327",
		  "Gjennomsnittspris": "4 703 771",
		  "image":"assets/images/stavanger.jpg"
		},
		"Kristiansand m/omegn": {
		  "Endring siste måned": -0.5,
		  "Endring sesongjustert siste måned": 0.4,
		  "Endring hittil i år": "7,5 %",
		  "Endring siste år": 2.1,
		  "Endring siste 5 år": 33.7,
		  "Endring siste 10 år": 48.3,
		  "Gjennomsnitt kvm. pris": "39 899",
		  "Gjennomsnittspris": "3 921 015",
		  "image":"assets/images/kristiansand.jpg"
		},
		"Tromsø": {
		  "Endring siste måned": -0.9,
		  "Endring sesongjustert siste måned": 0.8,
		  "Endring hittil i år": "7,1 %",
		  "Endring siste år": -0.4,
		  "Endring siste 5 år": 13.6,
		  "Endring siste 10 år": 41.9,
		  "Gjennomsnitt kvm. pris": "56 737",
		  "Gjennomsnittspris": "4 320 754",
		  "image":"assets/images/tromsø.jpeg"
		},
		"Norge": {
		  "Endring siste måned": 0.9,
		  "Endring sesongjustert siste måned": 0.6,
		  "Endring hittil i år": "8,2 %",
		  "Endring siste år": 1.7,
		  "Endring siste 5 år": 24.9,
		  "Endring siste 10 år": 59.6,
		  "Gjennomsnitt kvm. pris": "55 025",
		  "Gjennomsnittspris": "4 786 495",
		  "image":"assets/images/norge.jpg"
		}
	 };



	 function renderHousingData(data){
		const container = document.getElementById("housing-data");
		container.innerHTML = "";

		for(const city in data){
			if(data.hasOwnProperty(city)){
				const cityData = data[city];
				const cityElement = document.createElement("div");
				cityElement.classList.add("city-container");
				cityElement.setAttribute("data-city", city);

				const cityHeader = document.createElement("div");
				cityHeader.classList.add("city-header");
				cityElement.appendChild(cityHeader);
				

				const cityName = document.createElement("h2");
				cityName.classList.add("city-name");
				cityName.textContent = city;
				cityHeader.appendChild(cityName);
				

				const cityInfo = document.createElement("div");
				cityInfo.classList.add("city-info");
				for(const key in cityData){
					if(cityData.hasOwnProperty(key) && key !== "image"){
						const detail = document.createElement("p");
						detail.textContent = `${key}: ${cityData[key]}`;
						cityInfo.appendChild(detail);
					}
				}

				
				cityHeader.appendChild(cityInfo);
				

				const cityImage = document.createElement("img");
				cityImage.classList.add("city-image");
				cityImage.src = cityData.image;
				cityElement.appendChild(cityImage);


				container.appendChild(cityElement);
			}
		}
	 }

	 function updateCityData(){
		const select = document.getElementById("city-select");
		const selectedCity = select.value;

		const cityContainers = document.querySelectorAll(".city-container");
		cityContainers.forEach(container =>{
			if(selectedCity === "-" || container.getAttribute("data-city") === selectedCity){	
				container.style.display = "flex";		
				}else{
				container.style.display = "none";
			}
		});
	 }

window.onload = function(){
	renderHousingData(housingData);
	updateCityData();
};
