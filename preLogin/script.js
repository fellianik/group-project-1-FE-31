let userForm = document.getElementById("userForm");

let dataDokterAPI = "https://6350e03cdfe45bbd55b074ed.mockapi.io/medTechAPI/users";

let getDataLogin = async () => {
    let response = await fetch(dataDokterAPI);
    let allDataDokter = await response.json();

    console.log(allDataDokter);

    userForm.addEventListener("submit", (event) => {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        event.preventDefault();

        let isLogin = false;

        for (let i = 0; i < allDataDokter.length; i++) {
            if (username === allDataDokter[i].username && password === allDataDokter[i].password) {
                isLogin = true;
            }
        }

        if (isLogin === true) {
            window.location = "../data-pasien/index.html";
        } else {
            alert("Masukkan username atau password yang benar");
        }

        userForm.reset();
    });
};
getDataLogin();
