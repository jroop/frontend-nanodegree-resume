/*
This is empty on purpose! Your code to build the resume will go here.
 */



//Problem set #1
 (function() {
  var c =  299792458; //speed of light
  var m2cm = 100; //meters to cm
  var ns2s = 1.0/1000000000

  var ans = c*(100)*(1/1000000000);
  console.log(ans);
 })();

 (function(){
  var s = 'awesomeThoughts';

  var r = s.replace('awesome', 'fun');

  //$('#main').append(r);

 })();

/*
 Added functionality to have name and role appended to page
*/
(function(){
  var name = 'Joe Roop';
  var role = 'Web Developer';

  var formattedName = HTMLheaderName.replace('%data%', name);
  var formattedRole = HTMLheaderRole.replace('%data%', role);

  //$('#header').prepend(formattedRole);
  //$('#header').prepend(formattedName);
})();

/*
 Changing strings
*/
(function(){
  var s = 'audacity';

  console.log('U'+s.slice(2)); //take cahracter 2 on
  console.log(s[1].toUpperCase() + s.slice(2));
})();

/*
 Adding 1 to the last index of an array
*/
(function(){
  var a = [1, 2, 3, 7];

  console.log(a[a.length - 1]+1);

})();

/*
 Capitalize funny
*/
(function(){
  var s = 'jOe RooP';
  var a = s.split(' ');

  console.log(a[0][0].toUpperCase()+ a[0].slice(1).toLowerCase() + ' ' + a[1].toUpperCase());
})();

/*
  Add a bio to the page
*/

(function(){
  var skills = [
    "programming",
    "rock climbing",
    "skiing"
  ];

  //object leteral notation
  var bio = {
    "name": "Joe Roop",
    "role": "Web Developer",
    "contact": {
      "email": "joe.roop@test.com",
      "phone": "800-500-1234"
    },
    "picture": "https://scontent.fsnc1-1.fna.fbcdn.net/hprofile-xap1/v/t1.0-1/c80.0.160.160/p160x160/1526925_10152288547122018_1045643001_n.jpg?oh=45ddba4620df87a70abf024d90fcaa15&oe=5646E82B",
    "message": "Hello and welcome to my world!",
    "skills": skills
  };

  //dot notation
  var work = {};
  work.position = "software engineer";
  work.employer = "Dell";
  work.years = 2.1;
  work.city = "Mountain View";

  var edu = {};
  edu['name'] = 'Georgia Tech';
  edu['years'] = 2;
  edu['city'] = 'Atlanta';
  edu['degree'] = 'MS Aerospace Engineering';


  var education = [
    {
      "name": "Georgia Tech",
      "degree": "MS Aerospace Engineering",
      "date": 2006,
      "graduate": true
    },
    {
      "name": "Embry Riddle",
      "degree": "BS Aerospace Engineering",
      "date": 2004,
      "graduate": true
    }
  ]


  $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
  $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

  $("#topContacts").append(HTMLmobile.replace('%data%', bio.contact.phone));
  $("#topContacts").append(HTMLemail.replace('%data%', bio.contact.email));
  $('#header').append(HTMLbioPic.replace('%data%', bio.picture));

  $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.message));

  $('#header').append(HTMLskillsStart);
  for(var i = 0; i < bio.skills.length; i++){
    console.log(skills[i]);
    $('#header').append(HTMLskills.replace('%data%',bio.skills[i]));
  }
  $('#workExperience').append(HTMLworkStart);
  $('#workExperience').append(HTMLworkEmployer.replace('%data%',work["employer"])+HTMLworkTitle.replace('%data%',work["position"]));

  $('#education').append(HTMLschoolStart);
  $('#education').append(HTMLschoolName.replace('%data%',edu.name)+HTMLschoolDegree.replace('%data%', edu.degree));
})();