/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name" class="highlight-color-1">%data%</h1>';
var HTMLheaderRole = '<h3 id="sub-title" class="highlight-color-2">%data%</h3><hr class="highlight-color-2"/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="highlight-color-2">%contact%</span><span class="white-text">%data%</span></li>';


var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message highlight-color-1">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3" class="highlight-color-2">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
  Put all given code into the module and refactored a bit

  Ran after document loads,

  Also minimizes global pollution

*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName(bio.name) || function(){}; //TODO: this function doesn't match the signature that Udacity video shows
    $('#name').html(iName);
  });
  //console.log('running...');
  //console.log(google);

  var map;    // declares a global map variable
  // Calls the module function when the page loads
  JR.init();


});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  logClicks(loc.clientX, loc.clientY); //show click location on the console
});


/*
  write as a module so code is cleaner
  and an attempt to reduce global pollution
*/
var JR = (function(){
  /*
    Interesting notes on ways to ensure that you can use this
    be careful with the call vs apply and arrays!
    .call(obj, a1, a2) runs function
    .apply(obj, [a1, a2]) runs function
    var fnew = f.bind(obj, a1, a2) returns a new function with the bound obj
    and can use the obj as this inside the function pretty cool
  */


  //private vars
  var locations = [];
  var mapOptions;
  var InfoWindow;
  //use this to put some more info about the location so can
  //later for infoWindow
  var locationMapper = {};

  //for styling the google map from the API example
  var styles = [
    {
      stylers: [
        { hue: "#F2D694" },
        { saturation: 0 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];


  var JR = {}; //object to return basically encapsulates everything

  var init = function(){
    var that = this; //so can use this in sub functions
    //console.log(this);

    mapOptions = {
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      tilt: 0,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      }
    };

    //create the map to draw on
    var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    //only create one of these for speed and reducing clutter
    infoWindow = new google.maps.InfoWindow({
      //cool now we can access more info per marker with this!
      content: 'default',
      maxWidth: 300
    });
    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    locationFinder();
    //now do a call chain with binding to the functions
    pinPoster.call(this, locations);

    // Vanilla JS way to listen for resizing of the window
    // and adjust map bounds
    window.addEventListener('resize', function(e) {
      //Make sure the map bounds get updated on page resize
      map.fitBounds(mapBounds);
    });
  }

  var pinPoster = function(locations) {
    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };
      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      //need to bind to the query so we don't loos info so we can put it in the map box
      service.textSearch(request, callback.bind(request));
    }
  }

  var callback = function(results, status){
    //console.log(this.query);
    var that = this;
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker.call(that,results[0]);
    }
  }

  /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
  */
  var createMapMarker = function(placeData) {
    //console.log('createMapMarker ' + window.mapBounds);
    //console.log(this);
    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name + " " + lat
    });

    // hmmmm, I wonder what this is about...
    //TODO: build up this query after improved locationfinder
    var q = this.query;
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.close();
      infoWindow.setContent(
        '<div class="info-window"><h4 class="highlight-color-1">' + locationMapper[q].header + ': ' + name + '</h4><hr>' +
        '<p>' + locationMapper[q].body + '</p></div>'
      );
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }


  //TODO:  add to this function so we can get data on original object
  var locationFinder = function(){
    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    //add more info for infoWindow
    locationMapper[bio.contacts.location] = {
      "header": "Dwelling",
      "body": bio.welcomeMessage
    };

    console.log(locationMapper);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);

      locationMapper[education.schools[school].location] = {
        "header": "School",
        "body": "<em>" + education.schools[school].name +"</em><br>" +
          education.schools[school].degree + ": " +
          education.schools[school].dates
      };
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);

      locationMapper[work.jobs[job].location] = {
        "header": "Work",
        "body": "<em>" + work.jobs[job].employer +"</em><br> " +
          work.jobs[job].title + ": " +
          work.jobs[job].dates
      };

    }
  }

  //make public
  JR.init = init;

  return JR;

})();

