/*
This is empty on purpose! Your code to build the resume will go here.
*/

$("#main").append('ruipaivabranco');

var name = "Rui Paiva Branco"
var formattedName = HTMLheaderName.replace("%data%", name);

var role ="Full Stack Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").append(formattedName);
$("#header").append(formattedRole);

