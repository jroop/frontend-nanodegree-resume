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

  $('#main').append(r);

 })();

/*
 Added functionality to have name and role appended to page
*/
(function(){
  var name = 'Joe Roop';
  var role = 'Web Developer';

  var formattedName = HTMLheaderName.replace('%data%', name);
  var formattedRole = HTMLheaderRole.replace('%data%', role);

  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);
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