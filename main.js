const fname=document.getElementById('first-name'); 
const lname=document.getElementById('last-name'); 
const mail=document.getElementById('email'); 
const messg=document.getElementById('message'); 
const form=document.getElementById('form');
const eror=document.getElementById('result');

form.addEventListener('submit',(e)=>{
   
    if(fname.value==='' || fname.value==null ){
       eror.classList.remove('hidden'); 
    } else{ eror.classList.add("hidden"); }

    if(lname.value==='' || lname.value==null ){      
        eror.classList.remove("hidden"); 
        return false; 
} else{ eror.classList.add("hidden"); }


    if(mail.value==='' || mail.value==null ){
        eror.classList.remove('hidden'); 
     }  else{ eror.classList.add("hidden"); }

     if(messg.value==='' ||messg.value==null ){
        eror.classList.remove('hidden'); 
     }
}) ;
