


// ambil inputan dari user
// seleksi

// fungsi fetch
const fetchRegister = async (body) => {
  // method POST untuk menambahkan data
  let register = await fetch('https://6350e03cdfe45bbd55b074ed.mockapi.io/medTechAPI/:endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body) // body data type must match "Content-Type" header
  })

  console.log(register.status);

  let registerData = register.json()
  
  // kasih modal
  // jika statusnya 201 berarti berhasil
  // selain itu gagal 
}

let userName = document.getElementById('inputUsername')
let email = document.getElementById('inputEmail')
let password = document.getElementById('inputPassword')
let submitButton = document.getElementById('userForm')

submitButton.addEventListener('submit', (e) => {
  e.preventDefault()
  let registerBody = {
    name : userName.value,
    password: password.value
    }
  
    fetchRegister(registerBody)
})


// login
// ambil inputan seleksi
// get user, nanti bandingan ada yang pakek array find.. antara kumpulan user dengan yang di input
// jika berhasil yaudah lanjut...
// simpan data user itu di local storage
// lalu user sudah boleh di izinkan lanjut ke fitur fitur lain

// klo gagal yaudah kasih notif aja





