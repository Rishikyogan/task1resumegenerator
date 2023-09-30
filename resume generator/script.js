function addNewWEField()
{
let newNode = document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);


let weOb = document.getElementById("we");
let weAddButtonOb = document.getElementById("weAddButton");


weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewEDField(){
  
let newNode = document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("edField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);


let edOb = document.getElementById("ed");
let edAddButtonOb=document.getElementById("edAddButton");

edOb.insertBefore(newNode,edAddButtonOb)
}


function addNewHField(){
  
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("HField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",3);
  
  
  let hobbyOb = document.getElementById("hobby");
  let hobbyAddButtonOb=document.getElementById("hobbyAddButton");
}  

function generateCV() {
   let Name=document.getElementById("Name").value;
   let nameT1=document.getElementById("nameT1")
   nameT1.innerHTML=Name;

   document.getElementById("nameT2").innerHTML=Name;

   document.getElementById("contactT").innerHTML=document.getElementById("Contact").value;
   document.getElementById("addressT").innerHTML=document.getElementById("Address").value;
   document.getElementById("mailT").innerHTML=document.getElementById("Email").value;
   document.getElementById("instaT").innerHTML=document.getElementById("Instagram").value;
   document.getElementById("linkedT").innerHTML=document.getElementById("LinkedIn").value;



   document.getElementById("objectiveT").innerHTML=document.getElementById("Objective").value;


   let wes=document.getElementsByClassName('weField');

   let str = '';
   for (let e of wes)
   {
    str = str + `<li> ${e.value} </li>`;
   }
   document.getElementById("weT").innerHTML=str;


   let eds=document.getElementsByClassName('edField');  
   let str1=" ";
   for(let e of eds)
   {
    str1= str1 + `<li> ${e.value}</li>`;
   }
   document.getElementById("edT").innerHTML=str1;

  let file=document.getElementById("imgField").files[0]

  console.log(file);
  let reader=new FileReader()
  reader.readAsDataURL(file);
  console.log(reader.result);

  reader.onloadend=function(){
    document.getElementById("imgTemplate").src=reader.result;
  };


  
   document.getElementById("cv-form").style.display="none";
   document.getElementById("cv-template").style.display="block";


   let hobbys=document.getElementsByClassName('hField');  
   let str2=" ";
   for(let e of hobbys)
   {
    str2= str2 + `<li> ${e.value}</li>`;
   }
   document.getElementById("hobbyT").innerHTML=str2;
  
 
  }

  function downloadCV()
  {
    window.print();
  }
  
  
  
  
