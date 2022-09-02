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

function SendMail() {
    var params = {
      from_name:document.getElementById('name').value,
      email_id:document.getElementById('email').value,
      message:document.getElementById('Message').value,
      to_name: "mohamed Shabil",
    }
    emailjs.send('service_1rc33bn','template_oyd52bl',params).then((res) =>{
      form_submit();
    })
  }

