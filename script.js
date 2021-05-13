longitude: 139.54879508947934, latitude: 35.723777284047515 ces = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
      return [
                {
                              name: 'Magnemite',
                              location: {
                                                lat: 35.747820;
                                                lng: 139.473923;
                                            }
                          },
            ];
}

function renderPlaces(places) {
      let scene = document.querySelector('a-scene');

      places.forEach((place) => {
                let latitude = place.location.lat;
                let longitude = place.location.lng;

                let model = document.createElement('a-entity');
                model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
                model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
                model.setAttribute('rotation', '0 180 0');
                model.setAttribute('animation-mixer', '');
                model.setAttribute('scale', '0.5 0.5 0.5');

                model.addEventListener('loaded', () => {
                              window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
                          });

                scene.appendChild(model);
            });
}
