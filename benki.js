const text = "Frontend Developer | Python Developer | AI & ML Enthusiast";

let i = 0;

function typingEffect(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect,80);
    }

}

typingEffect();

function scrollToSection(){

    document.getElementById("about").scrollIntoView({
        behavior:"smooth"
    });

}

document.getElementById("contactForm").addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    this.reset();

});