function NewWorkep(){
    let node1=document.createElement("textarea");
    node1.classList.add("form-control");
    node1.classList.add("wepField");
    node1.classList.add("mt-2");
    node1.setAttribute("rows",3);
    node1.setAttribute("placeholder","Enter here");
    let x1=document.getElementById("we1");
    let y1=document.getElementById("workexp");

    x1.insertBefore(node1,y1);
}
function NewAcd(){
    let node2=document.createElement("textarea");
    node2.classList.add("form-control");
    node2.classList.add("acField");
    node2.classList.add("mt-2");
    node2.setAttribute("rows",3);
    node2.setAttribute("placeholder","Enter here");
    let x2=document.getElementById("we2");
    let y2=document.getElementById("academic");
    x2.insertBefore(node2,y2);

}
function Newvol(){
    let node3=document.createElement("textarea");
    node3.classList.add("form-control");
    node3.classList.add("volField");
    node3.classList.add("mt-2");
    node3.setAttribute("rows",3);
    node3.setAttribute("placeholder","Enter here");
    let x3=document.getElementById("vol1");
    let y3=document.getElementById("vol");
    x3.insertBefore(node3,y3);

}
function generateCV(){
   
    document.getElementById("nameT").innerHTML=document.getElementById
    ("nameline").value;
    
document.getElementById("nameT1").innerHTML=document.getElementById
("nameline").value;
 
document.getElementById("contactT").innerHTML=document.getElementById
("phone").value;

document.getElementById("addressT").innerHTML=document.getElementById
("Address").value;

document.getElementById("objT").innerHTML=document.getElementById
("obj").value;


document.getElementById("langT").innerHTML=document.getElementById
("lang").value;
 
document.getElementById("skillT").innerHTML=document.getElementById
("skill").value;
 

document.getElementById("fbT").innerHTML=document.getElementById
("fblink").value;

document.getElementById("insT").innerHTML=document.getElementById
("insta").value;

document.getElementById("lnT").innerHTML=document.getElementById
("linkedin").value;

document.getElementById("gitT").innerHTML=document.getElementById
("github").value;

//document.getElementById("objT").innerHTML=document.getElementById
//("obj").value;


let wor = document.getElementsByClassName("wepField");
let string1 = "";
for (let w of wor){
    string1=string1 + `<li> ${w.value} </li>`;
}
document.getElementById("wexpT").innerHTML= string1;

let obj = document.getElementsByClassName("acField");
let string2 = "";
for (let o of obj){
    string2=string2 + `<li> ${o.value} </li>`;
}
document.getElementById("acdT").innerHTML= string2;

let volu = document.getElementsByClassName("volField");
let string3 = "";
for (let v of volu){
    string3=string3 + `<li> ${v.value} </li>`;
}
document.getElementById("volT").innerHTML= string3;

document.getElementById('cv-form').style.display='none';

document.getElementById('cv-template').style.display='block';


} 
function printCV(){
    window.print();
}
    