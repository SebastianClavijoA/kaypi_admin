
$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
$(function(){
    $('#formPrincipal')
      .form({
        fields: {
          nombre: {
            identifier: 'nombre',
            rules: [
              {
                type   : 'regExp',
                value  : '[a-z A-Z0-9]',
                prompt : 'Por favor introduce el nombre de la Linea'
              }
            ]
          },
          categoria: {
            identifier: 'categoria',
            rules: [
              {
                type   : 'empty',
                prompt : 'Por favor selecciona la categoria'
              }
            ]
          },
          zona: {
            identifier: 'zona',
            rules: [
              {
                type   : 'regExp',
                value  : '[a-z A-Z]',
                prompt : 'Por favor introduce la zona de la Linea'
              }
            ]
          },
          horario: {
            identifier: 'horario',
            rules: [
              {
                type   : 'regExp',
                value  : '[a-z A-Z]',
                prompt : 'Por favor introduce el horario'
              }
            ]
          },
          pasaje1: {
            identifier: 'pasaje1',
            rules: [
              {
                type   : 'regExp',
                value  : '[a-z A-Z]',
                prompt : 'Por favor introduce el precio del pasaje Mayores'
              }
            ]
          },
          pasaje2: {
            identifier: 'pasaje2',
            rules: [
              {
                type   : 'regExp',
                value  : '[a-z A-Z]',
                prompt : 'Por favor introduce el precio del pasaje Discapacitados'
              }
            ]
          },
          pasaje3: {
            identifier: 'pasaje3',
            rules: [
              {
                type   : 'regExp',
                value  : '[a-z A-Z]',
                prompt : 'Por favor introduce el precio del pasaje Universitarios'
              }
            ]
          },
          pasaje4: {
            identifier: 'pasaje4',
            rules: [
              {
                type   : 'regExp',
                value  : '[a-z A-Z]',
                prompt : 'Por favor introduce el precio del pasaje Estudiantes'
              }
            ]
          },
          calle1: {
            identifier: 'calle1',
            rules: [
              {
                type   : 'regExp',
                value  : '[a-z A-Z]',
                prompt : 'Por favor introduce el campo Calle 1'
              }
            ]
          },
          calle2: {
            identifier: 'calle2',
            rules: [
              {
                type   : 'regExp',
                value  : '[a-z A-Z]',
                prompt : 'Por favor introduce el campo Calle 2'
              }
            ]
          },
          calle3: {
            identifier: 'calle3',
            rules: [
              {
                type   : 'regExp',
                value  : '[a-z A-Z]',
                prompt : 'Por favor introduce el campo Calle 3'
              }
            ]
          },
          calle4: {
            identifier: 'calle4',
            rules: [
              {
                type   : 'regExp',
                value  : '[a-z A-Z]',
                prompt : 'Por favor introduce el campo Calle 4'
              }
            ]
          },
          telefono1: {
            identifier: 'telefono1',
            rules: [
                {
                    type   : 'integer',
                    prompt : 'Por favor introduce el campo Teléfono 1'
                },
                {
                    type   : 'regExp[[0-9]{8}]',
                    prompt : 'Teléfono 1 no válido '
                },
                {
                    type   : 'maxLength[8]',
                    prompt : 'Teléfono 1 no válido '
                }
            ]
          },
          telefono2: {
            identifier: 'telefono2',
            rules: [
                {
                    type   : 'integer',
                    prompt : 'Por favor introduce el campo Teléfono 2'
                },
                {
                    type   : 'regExp[[0-9]{8}]',
                    prompt : 'Teléfono 2 no válido '
                },
                {
                    type   : 'maxLength[8]',
                    prompt : 'Teléfono 2 no válido '
                }
            ]
          },
          ruta1: {
            identifier: 'ida',
            rules: [
              {
                type   : 'regExp',
                value  : '[a-z A-Z]',
                prompt : 'Por favor establezca el Sentido de la Ruta Ida'
              }
            ]
          },
          ruta2: {
            identifier: 'vuelta',
            rules: [
              {
                type   : 'regExp',
                value  : '[a-z A-Z]',
                prompt : 'Por favor establezca el Sentido de la Ruta Vuelta'
              }
            ]
          },
          lat1: {
            identifier: 'lat1',
            rules: [
              {
                type   : 'empty',
                prompt : 'Por favor establezca la Ruta Ida en mapa'
              }
            ]
          },
          lat2: {
            identifier: 'lat2',
            rules: [
              {
                type   : 'empty',
                prompt : 'Por favor establezca la Ruta Vuelta en mapa'
              }
            ]
          },
        }
      })
    ;
});
//Obtiene datos de un metodo get
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var _idVar = getParameterByName('_id');


var auxIda =0;
var auxVuelta =0;
var tel=0;
var calle=0;
var todoObj;
var ruta1;
var ruta2;
//Carga los datos de listLineas con la diferencia que busca a una similitud de ids para cargar la linea que se requiere modiicar
window.addEventListener('DOMContentLoaded', (e) =>{
	fetch('http://localhost:3000/listLineas')
	.then(res => res.json())
	.then(data =>{
		if(data.response === 'success'){
			const todos = data.data; 
			var num = 1;
			
			todos.forEach(todo =>{
				if(todo._id==_idVar){

					todoObj=todo;
					console.log(todoObj);
					var id= todoObj._id;
					var nombre= todoObj.Nombre;
					var categoria= todoObj.Categoria;
					var calles1= todoObj.Calles[0];
					var calles2= todoObj.Calles[1];
					var calles3= todoObj.Calles[2];
					var calles4= todoObj.Calles[3];
					var calles5= todoObj.Calles[4];
					var calles6= todoObj.Calles[5];
					var calles7= todoObj.Calles[6];
					var calles8= todoObj.Calles[7];
					var pasaje1= todoObj.Pasajes[0];
					var pasaje2= todoObj.Pasajes[1];
					var pasaje3= todoObj.Pasajes[2];
					var pasaje4= todoObj.Pasajes[3];
					var telefono1= todoObj.Telefonos[0];
					var telefono2= todoObj.Telefonos[1];
					var telefono3= todoObj.Telefonos[2];
					var zona= todoObj.ZonasCBBA[0];
					var horarios= todoObj.Horarios;
					ruta1= todoObj.Rutas[0];
					ruta2= todoObj.Rutas[1];
					document.getElementById('_id').value =id;
					//document.getElementById('_id1').value =id;
					document.getElementById('nombre').value =nombre;
					document.getElementById('categoria').value =categoria;
					document.getElementById('zona').value =zona;
					document.getElementById('pasaje1').value =pasaje1;
					document.getElementById('pasaje2').value =pasaje2;
					document.getElementById('pasaje3').value =pasaje3;
					document.getElementById('pasaje4').value =pasaje4;
					document.getElementById('telefono1').value =telefono1;
					document.getElementById('telefono2').value =telefono2;
					document.getElementById('telefono3').value =telefono3;
					document.getElementById('calle1').value =calles1;
					document.getElementById('calle2').value =calles2;
					document.getElementById('calle3').value =calles3;
					document.getElementById('calle4').value =calles4;
					document.getElementById('calle5').value =calles5;
					document.getElementById('calle6').value =calles6;
					document.getElementById('calle7').value =calles7;
					document.getElementById('calle8').value =calles8;
					document.getElementById('horario').value =horarios;
					var sentido1 =ruta1.Sentido;
					var sentido2 =ruta2.Sentido;
					document.getElementById('ida').value =sentido1;
					document.getElementById('vuelta').value =sentido2;


					for (let index = 0; index < ruta1.Puntos.length; index++) {
						   addMarker1( { lat: parseFloat(ruta1.Puntos[index].lat), lng: parseFloat(ruta1.Puntos[index].lng) }, map1);
					}
					for (let index = 0; index < ruta2.Puntos.length; index++) {
						addMarker2( { lat: parseFloat(ruta2.Puntos[index].lat), lng: parseFloat(ruta2.Puntos[index].lng) }, map2);
					}
                   	const polylines1 = new google.maps.Polyline({
                     	path: ruta1.Puntos,
                     	geodesic: true,
                     	strokeColor: "#FF0000",
                     	strokeOpacity: 1.0,
                     	strokeWeight: 2,
					 	clickable: false
                   	});
                 
                   	polylines1.setMap(map1);
				   	const polylines2 = new google.maps.Polyline({
                     	path: ruta2.Puntos,
                     	geodesic: true,
                     	strokeColor: "#0000FF",
                    	strokeOpacity: 1.0,
                     	strokeWeight: 2,
					 	clickable: false
                   	});
                 
                   	polylines2.setMap(map2);  

					auxIda= todo.Rutas[0].Puntos.length;
					
					auxVuelta= todo.Rutas[1].Puntos.length;
				

					todoObj=todo;
					console.log(todoObj);
					var cantIda = auxIda;
				    var cantVuelta = auxVuelta;
			     	
					/*
					document.querySelector('#cantidadIda').innerHTML += `
				    	<input type="hidden" name="cantIda" value="${cantIda}">
				    `;
			    	document.querySelector('#cantidadVuelta').innerHTML += `
				    	<input type="hidden" name="cantVuelta" value="${cantVuelta}">
				    `;
					*/
					for (let index = 0; index < auxIda; index++) {
						document.querySelector('#cantPuntosIda1').innerHTML += `
							<div class="row g-3 align-items-center collapse">
								<div class="col-auto">
									<div class="input-group mb-3">
										<span class="input-group-text" id="lat1">Latitud</span>
										<input type="text" class="form-control" name="lat1" id="lat1" placeholder="Ingrese la latitud" value="${todo.Rutas[0].Puntos[index].lat}" aria-label="Latitud" aria-describedby="lat" required>
									</div>
								</div>
								<div class="col-auto">
									<div class="input-group mb-3">
										<span class="input-group-text" id="lng1">Longitud</span>
										<input type="text" class="form-control" id="lng1" name="lng1" placeholder="Ingrese la longitud" value="${todo.Rutas[0].Puntos[index].lng}" aria-label="Longitud" aria-describedby="lng" required>
									</div>
								</div>
							</div>
						`;			
					}
                
					for (let index = 0; index < auxVuelta; index++) {
						document.querySelector('#cantPuntosVuelta1').innerHTML += `
							<div class="row g-3 align-items-center collapse">
								<div class="col-auto">
									<div class="input-group mb-3">
										<span class="input-group-text" id="lat2">Latitud</span>
										<input type="text" class="form-control" name="lat2" id="lat2" placeholder="Ingrese la latitud" value="${todo.Rutas[1].Puntos[index].lat}" aria-label="Latitud" aria-describedby="lat">
									</div>
						
								</div>
								<div class="col-auto">
									<div class="input-group mb-3">
										<span class="input-group-text" id="lng2">Longitud</span>
										<input type="text" class="form-control" id="lng2" name="lng2" placeholder="Ingrese la longitud" value="${todo.Rutas[1].Puntos[index].lng}" aria-label="Longitud" aria-describedby="lng">
									</div>
								</div>
							</div>
						`;			
					}
			    }
				num++;
			});
		} else alert(data.response);
		
	})
	.catch(err => console.error(err));             
});

  //Ir una ventana atras del historial
function goBack() {
    window.history.back();
}

//Carga los datos establecidos en el metodo GenerarListadeLineas
var form = document.getElementById("formPrincipal");
				
let map1,map2;
var count=0;
var markers1=[];
var markers2=[];
function initMap() {
	const cochabamba ={lat: -17.387783, lng: -66.155871}
    map1 = new google.maps.Map(document.getElementById("googleMap1"), {
        center: cochabamba,
		disableDoubleClickZoom: true,
		streetViewControl: false,
        zoom: 13,  
    });
    map2 = new google.maps.Map(document.getElementById("googleMap2"), {
        center: cochabamba,
		disableDoubleClickZoom: true,
		streetViewControl: false,
        zoom: 13,
    });
    google.maps.event.addListener(map1, "dblclick", (event) => {
		document.querySelector('#cantPuntosIda2').innerHTML = ``;
		addMarker1(event.latLng, map1);
		var myLatLng = event.latLng;
		var lat = myLatLng.lat();
        var lng = myLatLng.lng();
		document.querySelector('#cantPuntosIda1').innerHTML += `
			<div class="row g-3 align-items-center">
				<div class="col-auto">
					<div class="input-group mb-3">
                        <span class="input-group-text" id="lat1">Latitud</span>
						<input type="text" name="lat1" class="form-control" id="lat1" value="${lat}"  required>
                    </div>
				</div>
				<div class="col-auto">
					<div class="input-group mb-3">
                        <span class="input-group-text" id="lng1">Longitud</span>
						<input type="text" name="lng1" class="form-control" id="lng1" value="${lng}"  required>
                    </div>
				</div>		
			</div>
		`;				
    });
	google.maps.event.addListener(map2, "dblclick", (event) => {
		document.querySelector('#cantPuntosVuelta2').innerHTML = ``;
		addMarker2(event.latLng, map2);
		var myLatLng = event.latLng;
        var lat = myLatLng.lat();
        var lng = myLatLng.lng();
		document.querySelector('#cantPuntosVuelta1').innerHTML += `
			<div class="row g-3 align-items-center">
				<div class="col-auto">
					<div class="input-group mb-3">
                        <span class="input-group-text" id="lat2">Latitud</span>
						<input type="text" name="lat2" class="form-control" id="lat2" value="${lat}"  required>
                    </div>
				</div>
				<div class="col-auto">
					<div class="input-group mb-3">
                        <span class="input-group-text" id="lng2">Longitud</span>
						<input type="text" name="lng2" class="form-control" id="lng2" value="${lng}"  required>
                    </div>
				</div>		
			</div>
		`;				
		count++;
    });
}
function addMarker1(location, map) {
    var marker1 = new google.maps.Marker({
        position: location,
        map: map
    });
	marker1.addListener("dblclick", function() {
     	marker1.setMap(null);
    });
    markers1.push(marker1);
}
function addMarker2(location, map) {
    var marker2 = new google.maps.Marker({
        position: location,
        map: map
    });

    marker2.addListener("dblclick", function() {
     	marker2.setMap(null);
    });
    markers2.push(marker2);
}
function setMapOnAll1(map) {
    for (var i = 0; i < markers1.length; i++) {
    	markers1[i].setMap(map1);
    }
}    

function clearMarkers1() {
    setMapOnAll1(null);
}

function showMarkers1() {
    setMapOnAll1(map1);
}
function deleteMarkers1() {
    clearMarkers1();
	document.querySelector('#cantPuntosIda1').innerHTML = ``;
    markers1 = [];
}
function setMapOnAll2(map) {
    for (var i = 0; i < markers2.length; i++) {
    markers2[i].setMap(map2);
	}
}    

function clearMarkers2() {
    setMapOnAll2(null);
}

function showMarkers2() {
    setMapOnAll1(map2);
}
function deleteMarkers2() {
	console.log(markers2);
    clearMarkers2();
	document.querySelector('#cantPuntosVuelta1').innerHTML = ``;
    markers2 = [];
}
function removeMarkers1(){
	document.querySelector('#cantPuntosIda1').innerHTML = ``;
	document.querySelector('#cantPuntosIda2').innerHTML += `
		<div class="row g-3 align-items-center">
			<div class="col-auto">
				<div class="input-group mb-3">
					<span class="input-group-text">Latitud</span>
					<input type="text" class="form-control" name="lat1" id="lat1" placeholder="Ingrese la latitud" aria-label="Latitud" aria-describedby="lat" required>
				</div>
			</div>
			<div class="col-auto">
				<div class="input-group mb-3">
					<span class="input-group-text">Longitud</span>
					<input type="text" class="form-control" id="lng1" name="lng1" placeholder="Ingrese la longitud" aria-label="Longitud" aria-describedby="lng" required>
				</div>
			</div>
			<div class="col-auto">
				<div class="card" style="width: 38rem;">
                    <img class="card-img" src="./img/routeGuide02.gif" alt="Card image cap">
                </div>
				<small class="text-primary">Llene el formulario guiandose en la linea trazada o cambie la ruta con nuevos puntos para hacer sus respectivas modificaciones</small>
			</div>
		</div>
		<div class="form-text text-danger">Se requiere tener puntos marcados en el mapa</div>
		<div class="form-text text-danger">Se requiere cargar las puntos o insertar nuevos en el respectivo mapa</div>
	`;			
	
    for(i=0; i<markers1.length; i++){
        markers1[i].setMap(null);
    }
	markers1 = [];
}
function removeMarkers2(){
	document.querySelector('#cantPuntosVuelta1').innerHTML = ``;
	document.querySelector('#cantPuntosVuelta2').innerHTML += `
		<div class="row g-3 align-items-center">
			<div class="col-auto">
				<div class="input-group mb-3">
					<span class="input-group-text">Latitud</span>
					<input type="text" class="form-control" name="lat2" id="lat2" placeholder="Ingrese la latitud" aria-label="Latitud" aria-describedby="lat" required>
				</div>	
			</div>
			<div class="col-auto">
				<div class="input-group mb-3">
					<span class="input-group-text">Longitud</span>
					<input type="text" class="form-control" id="lng2" name="lng2" placeholder="Ingrese la longitud" aria-label="Longitud" aria-describedby="lng" required>
				</div>
			</div>
			<div class="col-auto">
				<div class="card" style="width: 38rem;">
                    <img class="card-img" src="./img/routeGuide02.gif" alt="Card image cap">
                </div>
				<small class="text-primary">Llene el formulario guiandose en la linea trazada o cambie la ruta con nuevos puntos para hacer sus respectivas modificaciones</small>
			</div>
		</div>
		<div class="form-text text-danger">Se requiere tener puntos marcados en el mapa</div>
		<div class="form-text text-danger">Se requiere cargar las puntos o insertar nuevos en el respectivo mapa</div>		
	`;			
	
    for(i=0; i<markers2.length; i++){
        markers2[i].setMap(null);
    }
	markers2 = [];
}

function reloadMarkers1() {
	document.querySelector('#cantPuntosIda1').innerHTML = ``;
	document.querySelector('#cantPuntosIda2').innerHTML = ``;
	for (let index = 0; index < ruta1.Puntos.length; index++) {
		addMarker1( { lat: parseFloat(ruta1.Puntos[index].lat), lng: parseFloat(ruta1.Puntos[index].lng) }, map1);
	}	
	for (let index = 0; index < ruta1.Puntos.length; index++) {
		document.querySelector('#cantPuntosIda1').innerHTML += `
			<div class="row g-3 align-items-center">
				<div class="col-auto">
					<div class="input-group mb-3">
						<span class="input-group-text">Latitud</span>
						<input type="text" class="form-control" name="lat1" id="lat1" placeholder="Ingrese la latitud" value="${ruta1.Puntos[index].lat}" aria-label="Latitud" aria-describedby="lat">
					</div>
				</div>
				<div class="col-auto">
					<div class="input-group mb-3">
						<span class="input-group-text">Longitud</span>
						<input type="text" class="form-control" id="lng1" name="lng1" placeholder="Ingrese la longitud" value="${ruta1.Puntos[index].lng}" aria-label="Longitud" aria-describedby="lng">
					</div>
				</div>				
			</div>
		`;			
	}		
}

function reloadMarkers2() {
	document.querySelector('#cantPuntosVuelta1').innerHTML = ``;
	document.querySelector('#cantPuntosVuelta2').innerHTML = ``;
	for (let index = 0; index < ruta2.Puntos.length; index++) {
		addMarker2( { lat: parseFloat(ruta2.Puntos[index].lat), lng: parseFloat(ruta2.Puntos[index].lng) }, map2);
    }
	for (let index = 0; index < ruta2.Puntos.length; index++) {
		document.querySelector('#cantPuntosVuelta1').innerHTML += `
			<div class="row g-3 align-items-center">
				<div class="col-auto">
					<div class="input-group mb-3">
						<span class="input-group-text">Latitud</span>
						<input type="text" class="form-control" name="lat2" id="lat2" placeholder="Ingrese la latitud" value="${ruta2.Puntos[index].lat}" aria-label="Latitud" aria-describedby="lat">
					</div>	
				</div>
				<div class="col-auto">
					<div class="input-group mb-3">
						<span class="input-group-text">Longitud</span>
						<input type="text" class="form-control" id="lng2" name="lng2" placeholder="Ingrese la longitud" value="${ruta2.Puntos[index].lng}" aria-label="Longitud" aria-describedby="lng">
					</div>
				</div>
			</div>
		`;			
	}	
}
document.getElementById("delete-markers1").addEventListener("click", removeMarkers1);
document.getElementById("delete-markers2").addEventListener("click", removeMarkers2);
document.getElementById("reload-markers1").addEventListener("click", reloadMarkers1);
document.getElementById("reload-markers2").addEventListener("click", reloadMarkers2);
