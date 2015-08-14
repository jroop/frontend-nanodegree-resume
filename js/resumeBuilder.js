/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
  Add a bio to the page
*/

function inName(name){
    console.log(name);
    var n = name.split(" ");
    var first = n[0];
    var last = n[1];

    var f = first.toLowerCase();
    f = f[0].toUpperCase() + f.slice(1);

    var l = last.toUpperCase();
    return f + ' ' + l;
  }


//little escape function to protect our site from code
var escape = function(s){
  s = s.replace(/</g, '&lt;');
  s = s.replace(/</g, '&gt;');
  return s;
}

//object leteral notation
var bio = {
  "name": "Joe Roop",
  "role": "Web Developer",
  "contacts": {
    "mobile": "800-500-1234",
    "email": "joe.roop@test.com",
    "github": "jroop",
    "twitter": "",
    "location": "Sunnyvale, CA"
  },
  "welcomeMessage": "Hello and welcome!",
  "skills": [
    "programming",
    "rock climbing",
    "skiing",
    "flight testing"
  ],
  "biopic": "https://scontent.fsnc1-1.fna.fbcdn.net/hprofile-xap1/v/t1.0-1/c80.0.160.160/p160x160/1526925_10152288547122018_1045643001_n.jpg?oh=45ddba4620df87a70abf024d90fcaa15&oe=5646E82B",
  "display": function(){}
}

var education = {
  "schools": [
    {
      "name": "Georgia Tech",
      "location": "Atlanta, GA",
      "degree": "MS",
      "majors": [
        "Aerospace Engineering"
      ],
      "dates": 2006,
      "url": "http://www.gatech.edu/"
    },
    {
      "name": "Embry Riddle Aeronautical University",
      "location": "Prescott, AZ",
      "degree": "BS",
      "majors": [
        "Aerospace Engineering"
      ],
      "dates": 2000,
      "url": "https://www.erau.edu/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Embedded Systems Certificate",
      "school": "UCSC Extension",
      "date": 2014,
      "url": "http://www.ucsc-extension.edu/"
    }
  ],
  "display": function(){}
}

var work = {
  "jobs": [
    {
      "employer": "Dell Services Federal Government",
      "title": "Flight Controls Software Developer",
      "location": "NASA Ames Research Center, CA",
      "dates": "July 2013 - Current",
      "description": "Flight test engineer, flight crew member, and software engineer for the RASCAL UH-60A Black Hawk Helicopter project."
    },
    {
      "employer": "Sierra Nevada Corporation",
      "title": "Aerospace Engineer III",
      "location": "Centennial, CO",
      "dates": "January 2013 - June 2013",
      "description": "Flight test engineer, aerospace engineer and aero lead for the Night Ryder program."
    }
  ],
  "display": function(){}
}

var projects = [
  {
    "title": "RASCAL",
    "dates": "July 2013 - Current",
    "description": "Flight test engineer, flight crew member, and software engineer for the RASCAL UH-60A Black Hawk Helicopter project.",
    "images": [
    ]
  },
  {
    "title": "UDP Python",
    "dates": "July 2013 - Current",
    "description": "Used Python to send UDP packets to command optical sensor",
    "images": [
    ]
  }
]

//encapsulate display inside of projects
projects.display = function(){
  for(var p in projects){
    if(p != 'display'){ //TODO: class video does not use this there for it is also trying to append 'display' as well.
      console.log(projects[p].title); //logging
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', projects[p].title));
      $('.project-entry:last').append(HTMLprojectDates.replace('%data%', projects[p].dates));
      $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects[p].description));
      for(var i in projects[p].images){
        $('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects[p].images[i]));
      }
    }
  }
}
projects.display();





if(bio.skills.length > 0){
  $('#header').append(HTMLskillsStart);
  //add each skill
  for(skill in bio.skills){
    $('#skills').append(HTMLskills.replace('%data%',bio.skills[skill]));
  }
}


if(work.length > 0){
  //add all the jobs
  for(w in work){
    $('#workExperience').append(HTMLworkStart);
    //add the employer and title
    $('.work-entry:last').append(HTMLworkEmployer.replace('%data%',work[w].employer)+HTMLworkTitle.replace('%data%',work[w].title));
    //add the dates worked
    $('.work-entry:last').append(HTMLworkDates.replace('%data%',work[w].dates));
    //add the description
    $('.work-entry:last').append(HTMLworkDescription.replace('%data%',work[w].description));

  }
}

//internationalize name lesson 2 quiz
$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);


//adding projects with


$('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
$('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

$("#topContacts").append(HTMLmobile.replace('%data%', bio.contacts.phone));
$("#topContacts").append(HTMLemail.replace('%data%', bio.contacts.email));
$('#header').append(HTMLbioPic.replace('%data%', bio.biopic));

$('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

//$('#header').append(HTMLskillsStart);
/*
for(var i = 0; i < bio.skills.length; i++){
  console.log(skills[i]);
  $('#header').append(HTMLskills.replace('%data%',bio.skills[i]));
}*/
//$('#workExperience').append(HTMLworkStart);
//$('#workExperience').append(HTMLworkEmployer.replace('%data%',work[0].employer)+HTMLworkTitle.replace('%data%',work[0].title));

$('#education').append(HTMLschoolStart);
$('#education').append(HTMLschoolName.replace('%data%',education.schools[0].name)+HTMLschoolDegree.replace('%data%', education.schools[0].degree));
