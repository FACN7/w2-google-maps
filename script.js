//javascript.js
//set map options
var myLatLng = {lat: 32.794044, lng: 34.989571};
var mapOptions = {
    center: myLatLng,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    
};

//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);


//define calcRoute function
var from=document.getElementById("from");
var to=document.getElementById("to");



function calcRoute(){
//create request
var request = {
origin: from.value,
destination:to.value,
travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
unitSystem: google.maps.UnitSystem.METRIC
}

//pass the request to the route method
directionsService.route(request, function(result, status){
if(status == google.maps.DirectionsStatus.OK){

//Get distance and time
document.getElementById("output").innerHTML="<div class='alert-info'>From: "+from.value+".<br />To: "+to.value+".<br /> Driving distance: "+result.routes[0].legs[0].distance.text+".<br />Duration: "+result.routes[0].legs[0].duration.text+".</div>";

//display route
directionsDisplay.setDirections(result);
}else{
//delete route from map
directionsDisplay.setDirections({routes: []});
//center map in London
map.setCenter(myLatLng);

//show error message
document.getElementById("output").innerHTML="<div class='alert-danger'>Could not retrieve driving distance.</div>";
}
});

}




//create autocomplete objects for all inputs
var options = {
types: ['(cities)']   
}
var autocomplete1 = new google.maps.places.Autocomplete(from, options);
var autocomplete2 = new google.maps.places.Autocomplete(to, options);