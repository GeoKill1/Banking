document.getElementById("register").addEventListener("click", handleRegistration);

function handleRegistration() {
    console.log('handleRegistration');
    const body = {
        username: document.querySelector("input[type=text]").value,
        password:  document.querySelector("input[type=password]").value
    
    };
    console.log(body);
    fetch("/register", {
        method: "POST",
        body: JSON.stringify(body)
           
    })
    .then(r => console.log(r))
}

