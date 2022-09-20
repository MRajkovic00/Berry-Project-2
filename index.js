const form=document.querySelector("#loginForm");
const fName=document.querySelector("#firstName");
const lName=document.querySelector("#lastName");
const uName=document.querySelector("#userName");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const Cpassword=document.querySelector("#Cpassword");

  document.getElementById("subButton").onclick = function () 
  { 
    if(fName.value.trim()!==''||lName.value.trim()!=='' ||uName.value.trim()!=='' ||email.value.trim()!=='' || 
    password.value.trim()!=='' ||Cpassword.value.trim()!=='' ||date.value.trim()!==''){
     alert("Welcome to Berry.co!");
    }
   }
    
    