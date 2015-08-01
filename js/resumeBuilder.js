/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
  Add a bio to the page
*/

(function(){

  //object leteral notation
  var bio = {
    "name": "Joe Roop",
    "role": "Web Developer",
    "welcomeMessage": "Hello and welcome!",
    "contacts": {
      "email": "joe.roop@test.com",
      "phone": "800-500-1234",
      "github": "jroop",
      "twitter": ""
    },
    "skills": [
      "programming",
      "rock climbing",
      "skiing",
      "flight testing"
    ],
    "location": "Sunnyvale, CA",
    "picture": "https://scontent.fsnc1-1.fna.fbcdn.net/hprofile-xap1/v/t1.0-1/c80.0.160.160/p160x160/1526925_10152288547122018_1045643001_n.jpg?oh=45ddba4620df87a70abf024d90fcaa15&oe=5646E82B"
  }

  var work = [
    {
      "employer": "Dell Services Federal Government",
      "title": "Flight Controls Software Developer",
      "location": "NASA Ames Research Center, CA",
      "dates": "July 2013 - Current",
      "description": "Flight test engineer, flight crew member, and software engineer for the RASCAL UH-60A Black Hawk Helicopter project."
    },
    {
      "employer": "",
      "title": "Aerospace Engineer III",
      "location": "Centennial, CO",
      "dates": "January 2013 - June 2013",
      "description": "Flight test engineer, aerospace engineer and aero lead for the Night Ryder program."
    }
  ]

  var projects = [
    {
      "title": "RASCAL",
      "dates": "July 2013 - Current",
      "description": "Flight test engineer, flight crew member, and software engineer for the RASCAL UH-60A Black Hawk Helicopter project.",
      "images": [
        "http://rotorcraft.arc.nasa.gov/Images/Pictures%20for%20Wall/Aerial_60_NFAC_ACD10.jpg"
      ]
    }
  ]

  var education = {
    "schools": [
      {
        "name": "Georgia Tech",
        "location": "Atlanta, GA",
        "degree": "MS",
        "majors": [
          "Aerospace Engineering"
        ],
        "dates": "2004 - 2006",
        "url": "http://www.gatech.edu/"
      },
      {
        "name": "Embry Riddle",
        "location": "Prescott, AZ",
        "degree": "BS",
        "majors": [
          "Aerospace Engineering"
        ],
        "dates": "2000 - 2004",
        "url": "https://www.erau.edu/"
      }
    ],
    "onlineCourses": [
      {
        "title": "",
        "school": "",
        "dates": "",
        "url": ""
      }
    ]
  }


  $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
  $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

  $("#topContacts").append(HTMLmobile.replace('%data%', bio.contacts.phone));
  $("#topContacts").append(HTMLemail.replace('%data%', bio.contacts.email));
  $('#header').append(HTMLbioPic.replace('%data%', bio.picture));

  $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

  $('#header').append(HTMLskillsStart);
  for(var i = 0; i < bio.skills.length; i++){
    console.log(skills[i]);
    $('#header').append(HTMLskills.replace('%data%',bio.skills[i]));
  }
  $('#workExperience').append(HTMLworkStart);
  $('#workExperience').append(HTMLworkEmployer.replace('%data%',work[0].employer)+HTMLworkTitle.replace('%data%',work[0].title));

  $('#education').append(HTMLschoolStart);
  $('#education').append(HTMLschoolName.replace('%data%',education.schools[0].name)+HTMLschoolDegree.replace('%data%', education.schools[0].degree));
})();