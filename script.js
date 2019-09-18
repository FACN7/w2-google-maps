//set map option

var myLatLng = { lat: 32.699635, lng: 35.303547 };
var mapOptions = {
  center: myLatLng,
  zoom: 13,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

//create map
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

//create a DirectionService object
//to use the route method and get a result for our request

//create a DirectionsRendere object which we will
//use to display the rout

//bind the DirectionsRendere to the map

//define calcRout function
function calcRout() {
  //create request
  //pass the request to the route method
  //if status ok
  //Get distance and time
  //display route using
  //DirectionRenderer object
  //if status not ok
  //delete toute from map
  //center map in london
}

//create autocomplete object for all inputs
