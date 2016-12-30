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
		"location": "Condominio Flamengo , Playas"
	},
	"welcomeMsg": "Cree en ti",
	"skills": ["I never give up","delivering things","saving the universe"],
	"bioPic": "images/me.jpg"
};
var formattedRole=HTMLheaderRole.replace("%data%",bio['role']);
$("#header").prepend(formattedRole);
var formattedName=HTMLheaderName.replace("%data%",bio["name"]);
$("#header").prepend(formattedName);
var formattedmobile=HTMLmobile.replace("%data%",bio['contacts']['mobile']);
$("#topContacts").append(formattedmobile);
var formattedemail=HTMLemail.replace("%data%",bio['contacts']['email']);
$("#topContacts").append(formattedemail);
var formattedtwitter=HTMLtwitter.replace("%data%",bio['contacts']['twitter']);
$("#topContacts").append(formattedtwitter);
var formattedgithub=HTMLgithub.replace("%data%",bio['contacts']['github']);
$("#topContacts").append(formattedgithub);
var formattedlocation=HTMLlocation.replace("%data%",bio['contacts']['location']);
$("#topContacts").append(formattedlocation);
var formattedbioPic=HTMLbioPic.replace("%data%",bio['bioPic']);
$("#header").append(formattedbioPic);
var formattedwelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio['welcomeMsg']);
$("#header").append(formattedwelcomeMsg);
if(bio["skills"].length > 0){
	$("#header").append(HTMLskillsStart);
	var	formattedskills=HTMLskills.replace("%data%",bio["skills"][0]);
	$("#skills").append(formattedskills);
	formattedskills=HTMLskills.replace("%data%",bio["skills"][1]);
	$("#skills").append(formattedskills);
	formattedskills=HTMLskills.replace("%data%",bio["skills"][2]);
	$("#skills").append(formattedskills);
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
		"location": "Campus Prosperina, Guayaquil",
		"major": "Coputer Sciences",
		"url":"Www.s.com"
	}, {
		"name": "Maria Luisa Luque de Sotomayor",
		"dates": "2003 - 2014",
		"location": "Av. Jaime Roldos Aguilera, Playas",
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
	"location":"Playas, Guayas",
	"description":"s"
},
{
	"title":"Economist",
	"employer":"Provida",
	"dates":"2015-2016",
	"location":"Guayaquil,Ecuador",
	"description":"deliverw"
}]
};

function displaywork(){
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
$("#main").append(internationalizeButton);

function inName(){
	var finalName = bio.name;
    finalName=finalName[0]+finalName.slice(1,finalName.indexOf(" ")).toLowerCase()+" "+finalName.slice(finalName.indexOf(" ")+1).toUpperCase();
    return finalName;
}
bio.name=inName();
var projects={
	"projects":[{
	"title":"Generador de alta voltaje",
	"dates":"1s-2016",
	"description":"El diseño y elaboración de un generador de alto voltaje es de vital importancia para poder analizar y comprender tanto teórica como experimentalmente varios temas físicos y ser capaces de aplicarlos en la vida real. De una manera muy fácil pero con una amplia área de aplicación.",
	"image":["images/fuente_de_alto_voltaje.jpg"]
	},
	{"title":"Cuadrados Amigos",
	"dates":"2s-2015",
	"description":"Elaboraci'on de un juego en el lenguaje de programacion Python .consiste en un matriz de 10x10 que contiene numeros aleatorios  donde se debe eliminar con el menor numero de jugadas todo los numeros dentro de la matriz. eligiendo un numero se eliminan(posicion y fila) todos los numeros iguales que sean adyacentes al seleccionado se eliminan",
	"image":["images/cuadrados_amigos.jpg"]
}]
};
projects.display=function(){
	for ( project in projects["projects"]){
		$("#projects").append(HTMLprojectStart); //create an element with the class proyect entry
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects["projects"][project]["title"]);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project]["dates"]);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project]["description"]);
		$(".project-entry:last").append(formattedDescription);
		if(projects.projects[project].image.length>0){
			for(image in projects.projects[project].image){
				var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project]["image"][image]);
				$(".project-entry:last").append(formattedImage);
		
			};
		};
	};
};
projects.display();

$("#mapDiv").append(googleMap);





