function searchPlanet() {
    var name = document.getElementById('planetInput').value;
    
    if (name.trim() === '') {
        alert('Please input data first');
        return; // Stop the function execution if input is empty
    }
    

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/planets?name=' + name,
        headers: { 'X-Api-Key': 'OenUhRJlBvjxHysC5KmM8w==4Fsh4anLYOklhMCB' },
        contentType: 'application/json',
        success: function(result) {
            displayResult(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}


function displayResult(result) {
    var output = document.getElementById('result');
    output.innerHTML = ''; // Clear previous results

    if (result.length > 0) {
        result.forEach(function(planet) {
            var planetInfo = document.createElement('div');
            planetInfo.classList.add('planet-card');

            var planetImage = document.createElement('img');
            planetImage.alt = planet.name;
            planetImage.classList.add('planet-image');

            if (planet.name.toLowerCase() === 'neptune') {
                // Display Mercury specific video
                var planetVideo = document.createElement('video');
                planetVideo.src = 'https://www.gstatic.com/culturalinstitute/searchar/assets/neptune/desktop_dark.mp4';
                planetVideo.controls = true; // Add controls to the video player
                planetVideo.autoplay = true; // Autoplay the video
            
                planetInfo.appendChild(planetVideo);
        
            
            }else  if (planet.name.toLowerCase() === 'earth') {
                // Display Mercury specific video
                var planetVideo = document.createElement('video');
                planetVideo.src = 'https://www.gstatic.com/culturalinstitute/searchar/assets/earth/desktop_dark.mp4';
                planetVideo.controls = true; // Add controls to the video player
                planetVideo.autoplay = true; // Autoplay the video
            
                planetInfo.appendChild(planetVideo);
        
            } else if (planet.name.toLowerCase() === 'mars') {
                // Display Mercury specific video
                var planetVideo = document.createElement('video');
                planetVideo.src = 'https://www.gstatic.com/culturalinstitute/searchar/assets/mars/desktop_dark.mp4';
                planetVideo.controls = true; // Add controls to the video player
                planetVideo.autoplay = true; // Autoplay the video
            
                planetInfo.appendChild(planetVideo);
            
            } else if (planet.name.toLowerCase() === 'venus') {
                // Display Mercury specific video
                var planetVideo = document.createElement('video');
                planetVideo.src = 'https://www.gstatic.com/culturalinstitute/searchar/assets/venus_surface/desktop_dark.mp4';
                planetVideo.controls = true; // Add controls to the video player
                planetVideo.autoplay = true; // Autoplay the video
            
                planetInfo.appendChild(planetVideo);
            } else if (planet.name.toLowerCase() === 'mercury') {
                // Display Mercury specific video
                var planetVideo = document.createElement('video');
                planetVideo.src = 'https://www.gstatic.com/culturalinstitute/searchar/assets/mercury/desktop_dark.mp4';
                planetVideo.controls = true; // Add controls to the video player
                planetVideo.autoplay = true; // Autoplay the video
            
                planetInfo.appendChild(planetVideo);
            } else if (planet.name.toLowerCase() === 'jupiter') {
                // Display Mercury specific video
                var planetVideo = document.createElement('video');
                planetVideo.src = 'https://www.gstatic.com/culturalinstitute/searchar/assets/jupiter/desktop_dark.mp4';
                planetVideo.controls = true; // Add controls to the video player
                planetVideo.autoplay = true; // Autoplay the video
            
                planetInfo.appendChild(planetVideo);
            }else if (planet.name.toLowerCase() === 'saturn') {
                // Display Mercury specific video
                var planetVideo = document.createElement('video');
                planetVideo.src = 'https://www.gstatic.com/culturalinstitute/searchar/assets/saturn/desktop_dark.mp4';
                planetVideo.controls = true; // Add controls to the video player
                planetVideo.autoplay = true; // Autoplay the video
            
                planetInfo.appendChild(planetVideo);
            } else if (planet.name.toLowerCase() === 'uranus') {
                // Display Mercury specific video
                var planetVideo = document.createElement('video');
                planetVideo.src = 'https://www.gstatic.com/culturalinstitute/searchar/assets/uranus/desktop_dark.mp4';
                planetVideo.controls = true; // Add controls to the video player
                planetVideo.autoplay = true; // Autoplay the video
            
                planetInfo.appendChild(planetVideo);
            } else if (planet.name.toLowerCase() === 'pluto') {
                // Display Mercury specific video
                var planetVideo = document.createElement('video');
                planetVideo.src = 'https://www.gstatic.com/culturalinstitute/searchar/assets/pluto/desktop_dark.mp4';
                planetVideo.controls = true; // Add controls to the video player
                planetVideo.autoplay = true; // Autoplay the video
            
                planetInfo.appendChild(planetVideo);
             }
            else {
                // For other planets, use the placeholder URL
                var placeholderImageUrl = 'https://via.placeholder.com/300'; // Replace with your placeholder URL
                planetImage.src = placeholderImageUrl;

            }
            planetInfo.appendChild(planetImage);

            for (var prop in planet) {
                var label = document.createElement('label');
                label.textContent = prop.replace(/_/g, ' ') + ":";
                var value = document.createElement('span');
                value.textContent = planet[prop];

                var dataPoint = document.createElement('p');
                dataPoint.appendChild(label);
                dataPoint.appendChild(value);
                planetInfo.appendChild(dataPoint);
            }

            output.appendChild(planetInfo);

            // Adding 'More' button functionality after each planet card
            if (planet.name.toLowerCase() === 'earth') {
                var moreButton = document.createElement('button');
                moreButton.textContent = 'More';
                moreButton.addEventListener('click', function() {
                    var moreInfoBox = document.getElementById('moreInfoBox');
                    var additionalInfo = document.getElementById('additionalInfo');
                    additionalInfo.innerHTML = `
                        Earth isn't actually round.<br>
                        Coral reefs are Earth's largest living structure.<br>
                        Earth has a squishy interior.<br>
                        Antarctica is home to the largest ice sheet on Earth.<br>
                        The Moon is drifting away from Earth.<br>
                        Atacama is the driest place on Earth.<br>
                        Earth's magnetic pole is creeping westward.
                    `;
                    moreInfoBox.classList.add('show');
                });
                planetInfo.appendChild(moreButton);
           
            } if (planet.name.toLowerCase() === 'neptune') {
                var moreButton = document.createElement('button');
                moreButton.textContent = 'More';
                moreButton.addEventListener('click', function() {
                    var moreInfoBox = document.getElementById('moreInfoBox');
                    var additionalInfo = document.getElementById('additionalInfo');
                    additionalInfo.innerHTML = `
                    Big Blue. Neptune is about four times winder than Earth. <br>
                    Number Eight. Neptune is 30 AU from the Sun.<br>
                    A Neptunian Year. Neptune takes 165 Earth years to go around the Sun.<br>
                    Ice Giant. The densest of the giant planets.<br>
                    14 Moons.<br>
                    Rings and Arcs.<br>
                    Solo Voyager.<br>
                    Bring a Spacesuit.<br>
                    `;
                    moreInfoBox.classList.add('show');
                });
                planetInfo.appendChild(moreButton);
            }


         if (planet.name.toLowerCase() === 'mars') {
            var moreButton = document.createElement('button');
            moreButton.textContent = 'More';
            moreButton.addEventListener('click', function() {
                var moreInfoBox = document.getElementById('moreInfoBox');
                var additionalInfo = document.getElementById('additionalInfo');
                additionalInfo.innerHTML = `
                Mars is the fourth planet from the sun. ...<br>
                Mars is called the Red Planet because of all the iron in the soil. ...<br>
                Mars may look warm but it's very cold. ...<br>
                Mars has two moons, and their names are Phobos and Deimos.<br>
                Mars can have huge dust storms which last for months and can cover the entire planet.<br>
                `;
                moreInfoBox.classList.add('show');
            });
            planetInfo.appendChild(moreButton);
        }


        if (planet.name.toLowerCase() === 'venus') {
            var moreButton = document.createElement('button');
            moreButton.textContent = 'More';
            moreButton.addEventListener('click', function() {
                var moreInfoBox = document.getElementById('moreInfoBox');
                var additionalInfo = document.getElementById('additionalInfo');
                additionalInfo.innerHTML = `
                It rains sulfuric acid.<br>
                It's close to Earth in size and gravity.<br>
                Venus is mostly carbon dioxide in its atmosphere.<br>
                It's the hottest planet because of the greenhouse effect.<br>
                Venus has an iron core but no magnetic field.<br>
                It's named after a Roman Goddess.<br>
                Venus hardly rotates at all.<br>
                `;
                moreInfoBox.classList.add('show');
            });
            planetInfo.appendChild(moreButton);
        }
        
        
        
        if (planet.name.toLowerCase() === 'mercury') {
            var moreButton = document.createElement('button');
            moreButton.textContent = 'More';
            moreButton.addEventListener('click', function() {
                var moreInfoBox = document.getElementById('moreInfoBox');
                var additionalInfo = document.getElementById('additionalInfo');
                additionalInfo.innerHTML = `
                Smallest. It is a little bigger than Earth's Moon.<br>
                Inside Track. Mercury orbits closest to the Sun.<br>
                Fast Times. A year on Mercury is 88 Earth days.<br>
                Rough Surface. Mercury is cratered like the Moon.<br>
                Bring a Spacesuit. Mercury has a thin exosphere.<br>
                Moonless. Mercury has no moons.<br>
                Ringless.<br>
                Tough Spot.<br>
                `;
                moreInfoBox.classList.add('show');
            });
            planetInfo.appendChild(moreButton);
        }
        


           
        if (planet.name.toLowerCase() === 'jupiter') {
            var moreButton = document.createElement('button');
            moreButton.textContent = 'More';
            moreButton.addEventListener('click', function() {
                var moreInfoBox = document.getElementById('moreInfoBox');
                var additionalInfo = document.getElementById('additionalInfo');
                additionalInfo.innerHTML = `
                Jupiter is the 5th planet away from The Sun. <br>
                It is the biggest planet in our Solar System. ..<br>
                Jupiter has rings, but they're too faint to see very well. <br>
                Jupiter has 80 moons. <br>
                Jupiter is a Gas Giant. .<br>
                A day on Jupiter is super fast. <br>
                A year on Jupiter is the same as 11.8 Earth years.
                `;
                moreInfoBox.classList.add('show');
            });
            planetInfo.appendChild(moreButton);
        }


        if (planet.name.toLowerCase() === 'saturn') {
            var moreButton = document.createElement('button');
            moreButton.textContent = 'More';
            moreButton.addEventListener('click', function() {
                var moreInfoBox = document.getElementById('moreInfoBox');
                var additionalInfo = document.getElementById('additionalInfo');
                additionalInfo.innerHTML = `
                Saturn is the sixth planet from the Sun. <br>
                You can't stand on Saturn. <br>
                Saturn's rings aren't solid. <br>
                It's very windy on Saturn. <br>
                You can see Saturn through a telescope. <br>
                Saturn has more moons than any other planet in the Solar System. <br>
                Saturn has a moon bigger than Mercury.
                `;
                moreInfoBox.classList.add('show');
            });
            planetInfo.appendChild(moreButton);
        }


        


        
        if (planet.name.toLowerCase() === 'uranus') {
            var moreButton = document.createElement('button');
            moreButton.textContent = 'More';
            moreButton.addEventListener('click', function() {
                var moreInfoBox = document.getElementById('moreInfoBox');
                var additionalInfo = document.getElementById('additionalInfo');
                additionalInfo.innerHTML = `
                Uranus is the coldest planet in the Solar System: <br>
                Uranus orbits the Sun on its side: <br>
                A Season on Uranus lasts one long day – 42 years: <br>
                Uranus is the second-least dense planet: <br>
                Uranus has rings: <br>
                The atmosphere of Uranus contains “ices”: <br>
                Uranus has 27 moons:
                `;
                moreInfoBox.classList.add('show');
            });
            planetInfo.appendChild(moreButton);
        }


        if (planet.name.toLowerCase() === 'pluto') {
            var moreButton = document.createElement('button');
            moreButton.textContent = 'More';
            moreButton.addEventListener('click', function() {
                var moreInfoBox = document.getElementById('moreInfoBox');
                var additionalInfo = document.getElementById('additionalInfo');
                additionalInfo.innerHTML = `
                Pluto is a Dwarf Planet. <br>
                Pluto was considered a planet until 2006. <br>
                Pluto lies in the Kuiper Belt. <br>
                Sometimes Pluto is closer to The Sun than Neptune. <br>
                Pluto is smaller than the Moon. <br>
                There are white mountains on Pluto. <br>
                A year on Pluto is 248 Earth years.
                `;
                moreInfoBox.classList.add('show');
            });
            planetInfo.appendChild(moreButton);
        }




        });

        
    } else {
        output.textContent = 'No planet found with that name.';
    }
}


