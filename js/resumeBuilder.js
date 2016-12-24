/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append(["Mauricio David"]);
//var awesomeThoughts=" My name is Mauricio and I am AWESOME!";
//var funThoughts=awesomeThoughts.replace("AWESOME!","FUN");
//$("#main").append(funThoughts);
var skills=["awesomeness","delivering things","saving the universe"];
var name="Mauricio Leiton";
//var formattedName=HTMLheaderName.replace("%data%",name);
//$("#header").append(formattedName);
//var role="Student";
//var formattedRole=HTMLheaderRole.replace("%data%",role);
//$("#header").append(formattedRole);
var bio={
	"name": "Mauricio Leiton",
	"role": "Web Developer",
	"contacts": {
		"mobile": "0989389265",
		"email": "mau_leiton96@hotmail.com",
		"github": "mdleiton",
		"twitter": "@Ldavid21",
		"location": "General Villamil Playas"
	},
	"welomeMessage": "Cree en ti",
	"skills": ["I never give up","delivering things","saving the universe"],
	"bioPic": "images/me.jpg"
};
var formattedName=HTMLheaderName.replace("%data%",bio["name"]);
$("#header").append(formattedName);
var formattedRole=HTMLheaderRole.replace("%data%",bio['role']);
$("#header").append(formattedRole);
var formattedmobile=HTMLmobile.replace("%data%",bio['contacts']['mobile']);
$("#header").append(formattedmobile);
var formattedemail=HTMLemail.replace("%data%",bio['contacts']['email']);
$("#header").append(formattedemail);
var formattedbioPic=HTMLbioPic.replace("%data%",bio['bioPic']);
$("#header").append(formattedbioPic);

if(bio["skills"].length > 0){
	$("#header").append(HTMLskillsStart);
	var	formattedskills=HTMLskills.replace("%data%",bio["skills"][0]);
	$("#skills").prepend(formattedskills);
	formattedskills=HTMLskills.replace("%data%",bio["skills"][1]);
	$("#skills").prepend(formattedskills);
	formattedskills=HTMLskills.replace("%data%",bio["skills"][2]);
	$("#skills").prepend(formattedskills);
}


//var work={};
//work.position="Technical assistant";
//work.employer="Proelectrotec";
//work.years=1;
//work.city="Playas";

//var education={};
//education["name"]="Escuela Superior Politecnica del Litoral";
//education["years"]=2014-2019;
//education["city"]="Guayaquil";
//var formattedworkStart=HTMLworkStart.replace("work-entry","WorkExperience");
//$("#workExperience").append(formattedworkStart);
//var formattedworkEmployer=HTMLworkEmployer.replace("%data%",work['job position']);
//$("#workExperience").append(formattedworkEmployer);
var education={
	"schools": [{
		"name": "Escuela Superior Politecnica del Litoral",
		"dates": "2014 - 2019",
		"location": "Guayaquil",
		"major": "Coputer Sciences",
		"url":"Www.s.com"
	}, {
		"name": "Maria Luisa Luque de Sotomayor",
		"dates": "2003 - 2014",
		"location": "Playas",
		"major": "S",
		"url":"Www.s.com"
	}],
	"online course": [{
		"title": "javaScript Basics",
		"school":"Udacity",
		"dates": 2016,
		"url": "ss"
	}, {
		"title": "Intro to data sciences",
		"school":"Udacity",
		"dates": 2016,
		"url": "ss"
	}]
}

var work={
	"jobs" :[{
	"title":"Technical assistant",
	"employer":"Proelectrotec",
	"dates":"2014-2015",
	"location":"Playas",
	"description":"s"
},
{
	"title":"Economist",
	"employer":"Provida",
	"dates":"2015-2016",
	"location":"Guayaquil",
	"description":"deliverw"
}]
};

function displaywork(work){
for(job in work["jobs"]){
	$("#workExperience").append(HTMLworkStart );
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work["jobs"][job]['employer']);
	var formattedTitle=HTMLworkTitle.replace("%data%",work["jobs"][job]['title']);
	var formattedEmployerTitle=formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedworkDates=HTMLworkDates.replace("%data%",work["jobs"][job]["dates"]);
	$(".work-entry:last").append(formattedworkDates);
	var formattedworkDescription=HTMLworkDescription.replace("%data%",work["jobs"][job]["description"]);
	$(".work-entry:last").append(formattedworkDescription);

}
}
displaywork(work);

var proyect={
	"title":"big data",
	"dates":2,
	"location":"Playas",
	"Image":"s"
};



