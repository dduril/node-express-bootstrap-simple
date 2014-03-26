(function() {
	window.onload = function() {
	  
		// maps 1-3
	    var myLatlng = new google.maps.LatLng(37.826603,-122.422824);
        var mapOptions = { 
          zoom: 10,
		  center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
		
		var map1 = new google.maps.Map(document.getElementById("map-canvas-1"),
            mapOptions);
			
		var map2 = new google.maps.Map(document.getElementById("map-canvas-2"),
            mapOptions);
			
		var map3 = new google.maps.Map(document.getElementById("map-canvas-3"),
            mapOptions);
			
		var contentString = '<div>' +
          '<h2>Alcatraz Island</h2>'+
          '<div>' + 
		  '<p><strong>Alcatraz Island</strong>, part of the Golden Gate National Recreation Area.</p>' +
		  '<p><a href="http://www.nps.gov/alca/index.htm" target="_blank">Alcatraz Island (U.S. National Park Service)</a></p>' + 
		  '</div>' +
		  '</div>';
		  
		var infoWindow = new google.maps.InfoWindow({
		  content: contentString,
          maxWidth: 200
		});
		
		//To add the marker to the map, use the 'map' property
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map2,
          title:"Alcatraz Island"
        });
		
		// To add the marker to the map, use the 'map' property
        var marker3 = new google.maps.Marker({
          position: myLatlng,
          map: map3,
          title: 'Alcatraz Island'
        });

        google.maps.event.addDomListener(marker3, 'click', function(){
	      infoWindow.open(map3, marker3);
        });
			
		
		// map 4
		var cityList = [
    	{
			"latlng":[37.287165,-121.949957],
			infoWindowText:"<strong>Campbell</strong>",
			markerListText:"<strong>Campbell</strong>",
			url:"<br /><br /><a href=\"http://maps.google.com/maps?q=Campbell, CA\" target=\"_blank\">Get Directions and more.</a>"},	
    	{
			"latlng":[36.600238,-121.894676],
			infoWindowText:"<strong>Monterey</strong>",
			markerListText:"<strong>Monterey</strong>",
			url:"<br /><br /><a href=\"http://maps.google.com/maps?q=Monterey, CA\" target=\"_blank\">Get Directions and more.</a>"},
    	{
			"latlng":[37.441883,-122.14302],
			infoWindowText:"<strong>Palo Alto</strong>",
			markerListText:"<strong>Palo Alto</strong>",
			url:"<br /><br /><a href=\"http://maps.google.com/maps?q=Palo Alto, CA\" target=\"_blank\">Get Directions and more.</a>"},
		{
			"latlng":[37.77493,-122.419416],
			infoWindowText:"<strong>San Francisco</strong>",
			markerListText:"<strong>San Francisco</strong>",
			url:"<br /><br /><a href=\"http://maps.google.com/maps?q=San Francisco, CA\" target=\"_blank\">Get Directions and more.</a>"},
		{
			"latlng":[36.974117,-122.030796],
			infoWindowText:"<strong>Santa Cruz</strong>",
			markerListText:"<strong>Santa Cruz</strong>",
			url:"<br /><br /><a href=\"http://maps.google.com/maps?q=Santa Cruz, CA\" target=\"_blank\">Get Directions and more.</a>"}			
    	];
    
		var infoWnd, mapCanvas;
	
    	// Create a map object.
    	var mapDiv = document.getElementById("map-canvas-4");
    		mapCanvas = new google.maps.Map(mapDiv);
    		mapCanvas.setMapTypeId(google.maps.MapTypeId.ROADMAP);
	
    	// Create a infowindow object.
    	infoWnd = new google.maps.InfoWindow();
    
    	// Mapping markers on the map
    	var bounds = new google.maps.LatLngBounds();
    	var station, i, latlng;
    	for (i in cityList) {
			// Create a marker
    		city = cityList[i];
    		latlng = new google.maps.LatLng(city.latlng[0], city.latlng[1]);
    		bounds.extend(latlng);
			
    		var marker = createMarker(mapCanvas, latlng, city.infoWindowText, city.url);
    	}
	
    	//Fit the map bounds
    	mapCanvas.fitBounds(bounds);

		function createMarker(map, latlng, title, url) {
			// Create a marker
			var marker = new google.maps.Marker({
				position : latlng,
				map : map,
				title : title
			});
    
    	// The infoWindow is opened when the sidebar button is clicked
    	google.maps.event.addListener(marker, "click", function(){
    		infoWnd.setContent(title + url);
    		infoWnd.open(map, marker);
    	});
    
		return marker;
    }
	
    google.maps.event.addDomListener(window, 'load', initialize);
  };
})(); 