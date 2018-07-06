var title;
var body;
var h1;
var span;
var p;
var img;
var picture;
var he3;
var br;
var br2;
var date;

title=document.createElement("title");
h1 = document.createElement("h1");
span = document.createElement("span");
p = document.createElement("p");
span2 = document.createElement("span");
img = document.createElement("img");
he3= document.createElement("h3");
br= document.createElement("br");
br2 = document.createElement("br");
br3 = document.createElement("br");

document.body.appendChild(h1);
document.body.appendChild(he3);
document.body.appendChild(span);
document.body.appendChild(br);
document.body.appendChild(span2);
document.body.appendChild(br2);

document.body.appendChild(img);
document.body.appendChild(p);
document.body.appendChild(br3);

span2.setAttribute("id", "date");
date= document.getElementById("date");

document.body.style.backgroundColor="oldlace";
h1.style.color="red";
span.style.fontstyle = "italic";
p.style.color="grey";
date.setAttribute("style", "font-size:12px;font-style:normal");
img.setAttribute("src", "https://timedotcom.files.wordpress.com/2016/09/gettyimages-4975998901.jpg");
img.style.width = "600px";
img.style.margintop="20px";
document.title.innerHTML = "Using JS to Create HTML Nodes";

h1.innerHTML = "The Power of Coding";
he3.innerHTML = "Introducing Kids to Coding at and Early Age";
span.innerHTML = "by Jane Smith";
span2.innerHTML = "Feb 1, 2018";
p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida  roident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
