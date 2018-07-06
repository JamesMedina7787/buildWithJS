var george = {
  fname: "George",
  lname: "Clooney",
  age: 56,
  height: "5ft 11in",
  url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/George_Clooney_2016.jpg"
}
var jane = {
  fname: "Jane",
  lname: "Seymour",
  age: 66,
  height: "5ft 3in",
  url: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzY2NDk3Mjk0/jane-seymour-9542468-1-402.jpg"
}
var halle = {
  fname: "Halle",
  lname: "Berry",
  age: 51,
  height: "5ft 5in",
  url: "https://www.biography.com/.image/t_share/MTE1ODA0OTcxODYxNjQwNzE3/halle-berry-9542339-1-402.jpg"
}
var brad = {
  fname: "Brad",
  lname: "Pitt",
  age: 54,
  height: "5ft 11in",
  url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Brad_Pitt_Fury_2014.jpg"
}
var root;
root = document.getElementById("root");
var celebs = [];
celebs = [george, jane, halle, brad];


for(let i = 0; i < celebs.length; i++){

let description;
description = "<p>" +"Name:" + celebs[i].fname + " " + celebs[i].lname + " "
 + "<br>" + "Height:" + " " + celebs[i].height + "<br>" + "</p>";

root.innerHTML += description;
root.innerHTML += "<img src=" + celebs[i].url + ">";
// ima = document.createElement("img");
// ima.setAttribute("src", celebs[i].url);
//  document.body.append(ima);
}

document.body.setAttribute("style", "background-color: orange; width: 80%; margin: 0 45%");
