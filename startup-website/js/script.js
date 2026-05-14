const toggleBtn =
document.getElementById("theme-toggle");

if(toggleBtn){

    toggleBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){

            toggleBtn.innerHTML = "☀️";

        }
        else{

            toggleBtn.innerHTML = "🌙";

        }

    });

}

const form =
document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const name =
        document.getElementById("name").value.trim();

        const email =
        document.getElementById("email").value.trim();

        const message =
        document.getElementById("message").value.trim();

        const formMessage =
        document.getElementById("formMessage");

        if(name === "" ||
           email === "" ||
           message === ""){

            formMessage.style.color = "red";

            formMessage.innerHTML =
            "Please fill all fields.";

            return;

        }

        const emailPattern =
        /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(!email.match(emailPattern)){

            formMessage.style.color = "red";

            formMessage.innerHTML =
            "Enter a valid email.";

            return;

        }

        formMessage.style.color = "lime";

        formMessage.innerHTML =
        "Message sent successfully!";

        form.reset();

    });

}