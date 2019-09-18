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

var directionsService = new google.maps.DirectionsService();

//create a DirectionsRendere object which we will
//use to display the rout
var directionsDisplay = new google.maps.DirectionsRenderer();


//bind the DirectionsRendere to the map
directionsDisplay.setMap(map);


var from =document.getElementById('from').value;
var to =document.getElementById('to').value;


//define calcRoute function
function calcRoute() {
  //create request
 
 var request={
     origin: from,
     destination: to,
     travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
    unitsystem: google.maps.UnitSystem.IMPERIAL

   }



  //pass the request to the route method
  directionsService.route(request, function(result,status){
    //if status ok
    if(status== google.maps.DirectionStatus.OK){

   //Get distance and time
      document.getElementById('output').innerHTML= 
      '<div class="">From'+from +
      ":<br> To"+to+":<br> Driving distination"+
       result.routes[0].legs[0].distance.text +
       "<br> Duration:"+ result[0].routes[0].duration.text+"</div>";

           //display route 
      directionsDisplay.setDirections(result);


    }else{
       //delete toute from map

       directionsDisplay.setDirections({routes:[]});


         //center map in natzareth
         map.setCenter(myLatLng);


         //show error message
         document.getElementById('output').innerHTML='<div class=""> could not retrieve distance </div>'  ;
    }
  });

}

//create autocomplete object for all inputs

var options={
  types:['(cities)']
};


 from =document.getElementById('from');
 to =document.getElementById('to');

var autucomplete1= new google.maps.places.Autocomplete(from,options);
var autucomplete2= new google.maps.places.Autocomplete(to,options);