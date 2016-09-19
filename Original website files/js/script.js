 //  This example adds a search box to a map, using the Google Place Autocomplete
   //feature. People can enter geographical searches. The search box will return a
   //pick list containing a mix of places and predicted search terms.

  // This example requires the Places library. Include the libraries=places
   //parameter when you first load the API. For example:
   //<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

   //function initAutocomplete() {
     //var map = new google.maps.Map(document.getElementById('map'), {
       //center: {lat: -33.8688, lng: 151.2195},
       //zoom: 13,
       //mapTypeId: 'roadmap',
  	
 	 //mapTypeControl: true,
          //mapTypeControlOptions: {
            //  style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              //position: google.maps.ControlPosition.TOP_CENTER
          //},
          //zoomControl: false,
          //zoomControlOptions: {
           //   position: google.maps.ControlPosition.LEFT_CENTER
          //},
          //scaleControl: false,
          //scrollwheel: false,
          //streetViewControl: false,
          //streetViewControlOptions: {
            //  position: google.maps.ControlPosition.LEFT_TOP
          //},
          //fullscreenControl: true
     //});

  //   // Create the search box and link it to the UI element.
  //   var input = document.getElementById('pac-input');
  //   var searchBox = new google.maps.places.SearchBox(input);
  //   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  //   // Bias the SearchBox results towards current map's viewport.
  //   map.addListener('bounds_changed', function() {
  //     searchBox.setBounds(map.getBounds());
  //   });



  //   var markers = [];
  //   // Listen for the event fired when the user selects a prediction and retrieve
  //   // more details for that place.
  //   searchBox.addListener('places_changed', function() {
  //     var places = searchBox.getPlaces();

  //     if (places.length == 0) {
  //       return;
  //     }

  //     // Clear out the old markers.
  //     markers.forEach(function(marker) {
  //       marker.setMap(null);
  //     });
  //     markers = [];

  //     // For each place, get the icon, name and location.
  //     var bounds = new google.maps.LatLngBounds();
  //     places.forEach(function(place) {
  //       if (!place.geometry) {
  //         console.log("Returned place contains no geometry");
  //         return;
  //       }
  //       var icon = {
  //         url: place.icon,
  //         size: new google.maps.Size(71, 71),
  //         origin: new google.maps.Point(0, 0),
  //         anchor: new google.maps.Point(17, 34),
  //         scaledSize: new google.maps.Size(25, 25)
  //       };
        
  //        var infowindow = new google.maps.InfoWindow();
  //   var service = new google.maps.places.PlacesService(map);
        
  // $.getJSON( "https://data.mo.gov/api/views/eb3y-vtsa/rows.json", function( data ) { 
    
  //   for(var i = 0; i < data.data.length; i++)
  //   {
                
  //               var latt = parseFloat(data.data[i][12][1]);
  //               var longg = parseFloat(data.data[i][12][2]);
  //               var latLng = new google.maps.LatLng(latt, longg);
                
                
  //              var agencyname = data.data[i][8];
  //              var phonenumber = data.data[i][10];
  //              var hoursop = data.data[i][11];
  //              var address = data.data[i][12][0];
  //               // Create a marker for each place.
                
  //               var contentString = '<div id="content">'+
  //                                   '<div id="siteNotice">'+
  //                                   '</div>'+
  //                                   '<h1 id="firstHeading" class="firstHeading">' + agencyname + '</h1>'+
  //                                   '<div id="bodyContent">'+
  //                                   '<p><b>Phone Number: </b>' + phonenumber +'</p>'+
  //                                         '<p><b>Hours of Operation: </b>' + hoursop + '</p>' +
  //                                         '<p><b>Address: </b>' + address + '</p>' +
  //                                   '</div>'+
  //                                   '</div>'; 
  //               var marker=new google.maps.Marker({position:latLng, clickable:true, map:map, animation:google.maps.Animation.DROP 
  //               });
        
  //               var infowindow = new google.maps.InfoWindow({
  //                 content: contentString
  //               });
                
  //               google.maps.event.addListener(marker,'click', (function(marker,infowindow){ 
  //                     return function() {
  //                        infowindow.open(map,marker);
  //                     };
  //                 })(marker,infowindow)); 
                            
                            
  //               markers.push(marker);
  //     }
             
  //     });//end of getJSON
    
  //       if (place.geometry.viewport) {
  //         // Only geocodes have viewport.
  //         bounds.union(place.geometry.viewport);
  //       } else {
  //         bounds.extend(place.geometry.location);
  //       }
  //       });
  //       map.fitBounds(bounds);
  // });
  // }



  // google.maps.event.addDomListener(window, 'load', initAutocomplete);



  // This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: 'roadmap',
    scrollwheel: false
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      
       var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
      
$.getJSON( "https://data.mo.gov/api/views/eb3y-vtsa/rows.json", function( data ) { 
  
  for(var i = 0; i < data.data.length; i++)
            {
              
              var latt = parseFloat(data.data[i][12][1]);
              var longg = parseFloat(data.data[i][12][2]);
              var latLng = new google.maps.LatLng(latt, longg);
              
              
             var agencyname = data.data[i][8];
             var phonenumber = data.data[i][10];
             var hoursop = data.data[i][11];
             var address = data.data[i][12][0];
              // Create a marker for each place.
      // markers.push(new google.maps.Marker({
      //   map: map,
      //   icon: icon,
      //   title: place.name,
      //   position: latLng
      // }));
              
              
                    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">' + agencyname + '</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Phone Number: </b>' + phonenumber +'</p>'+
            '<p><b>Hours of Operation: </b>' + hoursop + '</p>' +
            '<p><b>Address: </b>' + address + '</p>' +
      '</div>'+
      '</div>';
        
              
              
              
              
              var marker=new google.maps.Marker({position:latLng, clickable:true, map:map, animation:google.maps.Animation.DROP });
      
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
              google.maps.event.addListener(marker,'click', (function(marker,infowindow){ 
        return function() {
           infowindow.open(map,marker);
        };
    })(marker,infowindow)); 
              
//        google.maps.event.addListener(marker,'click',function() {
        
//              // var placeID = data.data[i][0];
              
//         var contentString = '<div id="content">'+
//       '<div id="siteNotice">'+
//       '</div>'+
//       '<h1 id="firstHeading" class="firstHeading">' + agencyname + '</h1>'+
//       '<div id="bodyContent">'+
//       '<p><b>Phone Number: </b>' + phonenumber +'</p>'+
//             '<p><b>Hours of Operation: </b>' + hoursop + '</p>' +
//             '<p><b>Address: </b>' + address + '</p>' +
//       '</div>'+
//       '</div>';
        
  //             var infowindow = new google.maps.InfoWindow({
  //   content: contentString
  // });
//      infowindow.open(map, marker);
//      map.panTo(marker.getPosition());
//      });
              
              markers.push(marker);}
           
    });//end of getJSON
  
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
  

}


google.maps.event.addDomListener(window, 'load', initAutocomplete);

