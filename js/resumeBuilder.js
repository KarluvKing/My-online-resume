/*
This is empty on purpose! Your code to build the resume will go here.
*/
/*
$("#main").append('ruipaivabranco');

var name = "Rui Paiva Branco"
var formattedName = HTMLheaderName.replace("%data%", name);

var role ="Full Stack Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").append(formattedName);
$("#header").append(formattedRole);
*/

var skills = ["awesomeness","programming","teaching","js"];

var bio = {
	"name" : "Rui Paiva Branco",
	"role" : "Full Stack Web Developer",
	"contacts" : {
		   "mobile": "+351-964-021-285",
		    "email": "email@ruipaivabranco.com",
		   "github": "karluvking",
	      "twitter": "@ruipbranco",
	     "location": "Covilhã, Portugal"
	    },
	"welcomeMessage" : "I want a Dream Job",
	"skills" : [
	"awesomeness","programming","teaching","js"
	],
	"bioPic" : "images/foto_pic.jpg"
}

var work = {}

work.position = "Network Administrator";
work.employer = "Interprev, Lda.";
work.years = 4;
work.city = "Covilha";

var education = {}

education["name"] = "Mountain view";
education["years"] = 3;

$("#main").append(work.position);
$("#main").append(education["name"]);
