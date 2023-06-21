function toggle() {
    var appOpen = document.getElementById('grid-container');
    appOpen.classList.toggle('active')
}
function skills_frontend(){
    const dropdown1 = document.getElementById('skill-front')
    dropdown1.classList.toggle('drop-front')

    const arrow = document.getElementById('skill-arrow')
    arrow.classList.toggle('skill-arrow-animation')
}
function skills_backend(){
    const dropdown2 = document.getElementById('skill-back')
    dropdown2.classList.toggle('drop-back')

    const arrow = document.getElementById('skill-arrow2')
    arrow.classList.toggle('skill-arrow-animation')

}
function skills_frame(){
    const dropdown1 = document.getElementById('skill-frame')
    dropdown1.classList.toggle('drop-frame')

    const arrow = document.getElementById('skill-arrow3')
    arrow.classList.toggle('skill-arrow-animation')


}
function theme() {
    const dark = document.getElementById('sec')
    dark.classList.toggle('dark')
    iconChange = document.getElementById('dark-theme-icon')
    iconChange.classList.toggle('bi-sun')
    navIcon = document.getElementById('nav-top-icon')
    navIcon.classList.toggle('bi-sun')

}
function designPopup(){
    const blur = document.getElementById('sec')
    blur.classList.toggle('blur')
    const popup = document.getElementById('design-popup')
    popup.classList.toggle('popup')
}

window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('shadow',window.scrollY > 0)
})

function webdesign() {
    const design =document.getElementById('Popup')
    design.classList.toggle('Popup')
    const blur = document.getElementById('sec')
    blur.classList.toggle('blur')
}

function form_submit(){
    const model =document.getElementById('form_send')
    model.classList.toggle('form_send_open')
    const blur = document.getElementById('sec')
    blur.classList.toggle('blur')
}



function validate(){
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('error_name');
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('error_email');
    const message = document.getElementById('Message').value;
    const messageError = document.getElementById('error_message');

    const patternName = /[0-9(),-_.,]/;

    if(name.length<=3){
        nameError.innerHTML = "Name Must be 3 or more character longer"
        return false;
    }else{
        nameError.innerHTML="";
    }

    if(patternName.test(name)){
        nameError.innerHTML = "Name Cannot contain any Numbers and special charcters";    
        return false;
    }else{
        nameError.innerHTML = "";
    }

    if(email==""||email==null){
        emailError.innerHTML = "email Must be Filled"
        return false;
    }else{
        emailError.innerHTML = "";
    }
    
    if(email.includes("@"&&".com")){
        emailError.innerHTML="";
    }else{
        emailError.innerHTML = "email Must contain @ and .com"
        return false;
    }

    if(message==""||message==null){
        messageError.innerHTML = "message Must be Filled" 
        return false;
    }else{
        messageError.innerHTML = "";
    }

    if(message.length <= 4){
        console.log('Woring broih');
        messageError.innerHTML = "message Must greater than 4 character Long" 
        return false;
    }else{
        messageError.innerHTML = ""; 
    }

    SendMail();

    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('Message').value='';
    
    console.log("done")

    return true;
}


function SendMail() {
    var params = {
      from_name:document.getElementById('name').value,
      email_id:document.getElementById('email').value,
      message:document.getElementById('Message').value,
      to_name: "mohamed Shabil",
    }
    emailjs.send("service_deu8c2s","template_oyd52bl",params).then((res) =>{
      if(res.status == 200){
        alert("Your message has been sent Successfully");
      }else{
        alert("Something Went Wrong Please try again")
      }
    })
  }

