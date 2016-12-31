//$("#main").append(["Mauricio David"]);
//var awesomeThoughts=" My name is Mauricio and I am AWESOME!";
//var funThoughts=awesomeThoughts.replace("AWESOME!","FUN");
//$("#main").append(funThoughts);
//var skills=["awesomeness","delivering things","saving the universe"];
//var name="Mauricio Leiton";
//var formattedName=HTMLheaderName.replace("%data%",name);
//$("#header").append(formattedName);
//var role="Student";
//var formattedRole=HTMLheaderRole.replace("%data%",role);
//$("#header").append(formattedRole);
var bio = {
    "name": "Mauricio Leiton",
    "role": "Web Developer",
    "contacts": {
        "mobile": "0989389265",
        "email": "mau_leiton96@hotmail.com",
        "github": "mdleiton",
        "twitter": "@Ldavid21",
        "location": "Data de Villamil, Guayas"
    },
    "welcomeMessage": "Cree en ti",
    "skills": ["I never give up", "delivering things", "saving the universe"],
    "bioPic": "images/me.jpg"
};
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio['role']);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
    $("#header").prepend(formattedName);
    var formattedmobile = HTMLmobile.replace("%data%", bio['contacts']['mobile']);
    $("#topContacts").append(formattedmobile);
    var formattedemail = HTMLemail.replace("%data%", bio['contacts']['email']);
    $("#topContacts").append(formattedemail);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio['contacts']['twitter']);
    $("#topContacts").append(formattedtwitter);
    var formattedgithub = HTMLgithub.replace("%data%", bio['contacts']['github']);
    $("#topContacts").append(formattedgithub);
    var formattedlocation = HTMLlocation.replace("%data%", bio['contacts']['location']);
    $("#topContacts").append(formattedlocation);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio['bioPic']);
    $("#header").append(formattedbioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio['welcomeMessage']);
    $("#header").append(formattedwelcomeMsg);
    if (bio["skills"].length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedskills = HTMLskills.replace("%data%", bio["skills"][0]);
        $("#skills").append(formattedskills);
        formattedskills = HTMLskills.replace("%data%", bio["skills"][1]);
        $("#skills").append(formattedskills);
        formattedskills = HTMLskills.replace("%data%", bio["skills"][2]);
        $("#skills").append(formattedskills);
    }
};

bio.display();
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
var education = {
    "schools": [{
        "name": "Maria Luisa Luque de Sotomayor",
        "dates": "2003 - 2014",
        "location": "Av. Jaime Roldos Aguilera, Playas",
        "majors": ["Systems Administration"],
        "degree": "Technical bachelor",
        "url": "Www.s.com"
    }, {
        "name": "Escuela Superior Politecnica del Litoral",
        "dates": "2014 - 2019",
        "location": "Campus Prosperina, Guayaquil",
        "majors": ["Computer science "],
        "url": "Www.espol.edu.ec",
        "degree": "Engineer"
    }],
    "onlineCourses": [{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "2016",
        "url": "www.udacity.com"
    }, {
        "title": "Intro to data sciences",
        "school": "Udacity",
        "dates": "2016",
        "url": "www.udacity.com"
    }]
};
/* otra forma de crear fuction
function displayeducation(){
	displayeducation();

*/
education.display = function() {
    for (var  school in education["schools"]) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education["schools"][school]['name']);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education["schools"][school]['degree']);
        var formatteschoolName = formattedschoolName + formattedschoolDegree;
        $(".education-entry:last").append(formatteschoolName);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education["schools"][school]['location']);
        $(".education-entry:last").append(formattedschoolLocation);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education["schools"][school]['dates']);
        $(".education-entry:last").append(formattedschoolDates);
        for (major in education["schools"][school]['majors']) {
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education["schools"][school]['majors'][major]);
            $(".education-entry:last").append(formattedschoolMajor);
        }
    }
    $("#education").append(HTMLonlineClasses);
    for ( var course in education["onlineCourses"]) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education["onlineCourses"][course]['title']);
        //$("#education:last").append(formattedonlineTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education["onlineCourses"][course]['school']);
        //$("#education:last").append(formattedonlineSchool);
        var fomatted = formattedonlineTitle + formattedonlineSchool;
        $("#education").append(fomatted);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education["onlineCourses"][course]['dates']);
        $("#education").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education["onlineCourses"][course]['url']);
        $("#education").append(formattedonlineURL);

    }
};
education.display();

var work = {
    "jobs": [{
            "title": "Technical assistant",
            "employer": "Proelectrotec",
            "dates": "2014-2015",
            "location": "Playas, Guayas",
            "description": "yo realizaba el control de sistemas de la empresa"
        },
        {
            "title": "Economist",
            "employer": "Provida",
            "dates": "2015-2016",
            "location": "Guayaquil,Ecuador",
            "description": "deliverw"
        }
    ]
};

work.display = function() {
    for ( var job in work["jobs"]) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][job]['employer']);
        var formattedTitle = HTMLworkTitle.replace("%data%", work["jobs"][job]['title']);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedworkDates = HTMLworkDates.replace("%data%", work["jobs"][job]["dates"]);
        $(".work-entry:last").append(formattedworkDates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work["jobs"][job]["location"]);
        $(".work-entry:last").append(formattedworkLocation);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work["jobs"][job]["description"]);
        $(".work-entry:last").append(formattedworkDescription);
    }
}
work.display();
$("#main").append(internationalizeButton);

function inName() {
    var finalName = bio.name;
    finalName = finalName[0] + finalName.slice(1, finalName.indexOf(" ")).toLowerCase() + " " + finalName.slice(finalName.indexOf(" ") + 1).toUpperCase();
    return finalName;
}
bio.name = inName();
var projects = {
    "projects": [{
            "title": "Generador de alta voltaje",
            "dates": "1s-2016",
            "description": "El diseño y elaboración de un generador de alto voltaje es de vital importancia para poder analizar y comprender tanto teórica como experimentalmente varios temas físicos y ser capaces de aplicarlos en la vida real. De una manera muy fácil pero con una amplia área de aplicación.",
            "images": ["images/fuente_de_alto_voltaje.jpg"]
        },
        {
            "title": "Cuadrados Amigos",
            "dates": "2s-2015",
            "description": "Elaboración de un juego en el lenguaje de programación Python .consiste en un matriz de 10x10 que contiene numeros aleatorios  donde se debe eliminar con el menor numero de jugadas todo los numeros dentro de la matriz. eligiendo un numero se eliminan(posicion y fila) todos los numeros iguales que sean adyacentes al seleccionado se eliminan",
            "images": ["images/cuadrados_amigos.jpg"]
        }
    ]
};
projects.display = function() {
    for ( var project in projects["projects"]) {
        $("#projects").append(HTMLprojectStart); //create an element with the class proyect entry
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects["projects"][project]["title"]);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project]["dates"]);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project]["images"][image]);
                $(".project-entry:last").append(formattedImage);

            };
        };
    };
};
projects.display();

$("#mapDiv").append(googleMap);


var formattedmobile = HTMLmobile.replace("%data%", bio['contacts']['mobile']);
//$("#lets-connect:last").append(formattedmobile);
var formattedemail = HTMLemail.replace("%data%", bio['contacts']['email']);
//$("#lets-connect:last").append(formattedemail);
var formattedtwitter = HTMLtwitter.replace("%data%", bio['contacts']['twitter']);
//$("#lets-connect:last").append(formattedtwitter);
var formattedgithub = HTMLgithub.replace("%data%", bio['contacts']['github']);
//$("#lets-connect:last").append(formattedgithub);
var formattedlocation = HTMLlocation.replace("%data%", bio['contacts']['location']);
var formatted = formattedmobile + formattedemail + formattedtwitter + formattedgithub + formattedlocation;
$("#lets-connect").append(formatted);
